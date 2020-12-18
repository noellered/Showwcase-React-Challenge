import React, { FunctionComponent, useEffect, useState } from 'react';
import Autocomplete, { AutocompleteRenderGroupParams } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import MonthPicker from '../pickers/MonthPicker';
import YearPicker from '../pickers/YearPicker';
import { useStyles } from './styles';


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
const EducationModalContent:FunctionComponent<{handleUpdate: any}>= ({ handleUpdate }) => {
    const classes = useStyles();
    const [institutionList, setInstitutionList] = useState<string[]>([]);
    const [institution, setInstitution] = useState<string>('');
    const [degree, setDegree] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [fieldOfStudy, setFieldOfStudy] = useState<string>('');
    const [start, setStart] = useState<{month: number, year: number}>({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    });
    const [end, setEnd] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    });



    const getInstitutions = () => {
        fetch(`http://universities.hipolabs.com/search`)
        .then((res: any) => res.json()
        .then((JSON) => setInstitutionList(JSON.map((item)=>item['name']))));
    }

    // Get institutions list on component mount
    useEffect( () => {
        getInstitutions()
    }, []);



    const renderGroup = (params: AutocompleteRenderGroupParams) => [
        <ListSubheader key={params.key} component="div">
          {params.group}
        </ListSubheader>,
        params.children,
    ];


    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newEducation = { institution, fieldOfStudy, degree, start, end, description }
        return handleUpdate(newEducation);
    }

    const handleInputChange = (e: React.ChangeEvent<{}>, value: string) => {
        setInstitution(value)
    }



    return(
        <div className={classes.modalContent}>
            <Typography variant="h3">Add New Education</h2>
            <form onSubmit={handleSubmit}>
                <Autocomplete 
                id="institutions-list" 
                options={institutionList} 
                freeSolo 
                renderGroup={renderGroup}
                renderInput={(params)=>(
                    <TextField {...params} label="Enter your institution" margin="normal" variant="outlined" required/>
                )}
                renderOption={(option) => <p>{option}</p>}
                ListboxComponent={ListboxComponent as React.ComponentType<React.HTMLAttributes<HTMLElement>>}
                disableListWrap
                autoSelect={true}
                onInputChange={handleInputChange}
                />
                <TextField label="Degree Level (B.A., M.Sc., etc.)" variant="outlined" onChange={(e)=> setDegree(e.target.value)} required/>
                <TextField label="Field of Study" variant="outlined" onChange={(e)=> setFieldOfStudy(e.target.value)} required/>
                <TextField multiline fullWidth rows={2} variant="outlined" label="Description" onChange={(e)=> setDescription(e.target.value)}/>
                <div style={{display: 'flex'}}>
                    <MonthPicker label="Start Month" id="startMonth" onChange={(e)=> setStart({...start, month: e.target.value})}/>
                    <YearPicker label="Start Year" id="startYear" onChange={(e)=> setStart({...start, year: e.target.value})}/>
                    <MonthPicker label="End Month" id="endMonth" onChange={(e)=> setEnd({...end, month: e.target.value})}/>
                    <YearPicker label="End Year (or expected)" id="endYear" onChange={(e)=> setEnd({...end, year: e.target.value})}/>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
export default EducationModalContent;