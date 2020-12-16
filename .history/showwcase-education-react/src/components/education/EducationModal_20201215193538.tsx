import React, { useEffect, useState, Fragment } from 'react';
import Autocomplete, { AutocompleteRenderGroupParams } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider  } from '@material-ui/pickers';

//Virtualize institution list for more efficient rendering performance

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




//Add Education Modal Content
const EducationModal = () => {
    const [institutionList, setInstitutionList] = useState<string[]>([])
    const [startYear, setStartYear] = useState(new Date())

    const getInstitutions = () => {
        fetch(`http://universities.hipolabs.com/search`)
        .then((res: any) => res.json()
        .then((JSON) => setInstitutionList(JSON.map((item)=>item['name']))));
    }

    // Get institutions list on component mount
    useEffect( () => {
        getInstitutions()
    }, []);

    const OPTIONS = institutionList;

    const renderGroup = (params: AutocompleteRenderGroupParams) => [
        <ListSubheader key={params.key} component="div">
          {params.group}
        </ListSubheader>,
        params.children,
    ];

    return(
        <div>
            <Autocomplete 
            id="institutions-list" 
            options={OPTIONS} 
            freeSolo 
            renderGroup = {renderGroup}
            renderInput={(params)=>(
                <TextField {...params} label="Enter your institution" margin="normal" variant="outlined" />
            )}
            renderOption={(option) => <p>{option}</p>}
            ListboxComponent={ListboxComponent as React.ComponentType<React.HTMLAttributes<HTMLElement>>}
            disableListWrap
            autoSelect={true}
            />
            <Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                variant="inline"
                openTo="year"
                views={["year"]}
                label="Start Year"
                helperText="Select the Start Year"
                value={startYear}
                onChange={setStartYear}
            />
            </Fragment>
            
        </div>
    )
}
export default EducationModal;