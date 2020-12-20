import React, { FunctionComponent } from 'react';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import { ListSubheader, useMediaQuery, TextField } from '@material-ui/core';
import Autocomplete, { AutocompleteRenderGroupParams } from '@material-ui/lab/Autocomplete';
import { useTheme } from '@material-ui/core/styles';

/* 
VIRTUALIZED INSTITUTIONS LIST
Fetches list of institutions
Renders large list in groups for better lookup and render performance
Sets institution name on selection
*/


const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    },
  });
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
    const ref = React.useRef<VariableSizeList>(null);
    React.useEffect(() => {
      if (ref.current != null) {
        ref.current.resetAfterIndex(0, true);
      }
    }, [data]);
    return ref;
  }
  

  // React-window adapter
  const ListboxComponent = React.forwardRef<HTMLDivElement>(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const theme = useTheme();
    const itemData = React.Children.toArray(children);
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;
  
    const getChildSize = (child: React.ReactNode) => {
      if (React.isValidElement(child) && child.type === ListSubheader) {
        return 48;
      }
  
      return itemSize;
    };
  
    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };
  
    const gridRef = useResetCache(itemCount);
  
    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width="100%"
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={(index) => getChildSize(itemData[index])}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  });


interface ListProps {
  handleSelect: (arg) => void,
  optionsList: string[]
}  

const VirtualizedList:FunctionComponent<ListProps>= ({ handleSelect, optionsList }) => {


    const renderGroup = (params: AutocompleteRenderGroupParams) => [
        <ListSubheader key={params.key} component="div">
          {params.group}
        </ListSubheader>,
        params.children,
    ];

    const handleInputChange = (e: React.ChangeEvent<{}>, value: string) => {
        return handleSelect(value)
    }

    return(
        <Autocomplete 
            id="institutions-list" 
            options={optionsList} 
            freeSolo 
            renderGroup={renderGroup}
            renderInput={(params)=>(
                <TextField {...params} label="Institution" margin="normal" variant="outlined" required/>
            )}
            renderOption={(option) => <p>{option}</p>}
            ListboxComponent={ListboxComponent as React.ComponentType<React.HTMLAttributes<HTMLElement>>}
            disableListWrap
            autoSelect={true}
            onInputChange={handleInputChange}
        />
    )
}

export default VirtualizedList;