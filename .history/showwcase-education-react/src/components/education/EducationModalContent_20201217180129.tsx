import React, { FunctionComponent, useEffect, useState } from 'react';
import Autocomplete, { AutocompleteRenderGroupParams } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import MonthPicker from '../pickers/MonthPicker';
import YearPicker from '../pickers/YearPicker';
import { useStyles } from './styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


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
    const [current, setCurrent] = useState<boolean>(false)
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

    //Render group for visualized autocomplete component
    const renderGroup = (params: AutocompleteRenderGroupParams) => [
        <ListSubheader key={params.key} component="div">
          {params.group}
        </ListSubheader>,
        params.children,
    ];

    //Handle form submit
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newEducation = { institution, fieldOfStudy, degree, start, end, description, current }
        return handleUpdate(newEducation);
    }

    //Handle institution change for autocomplete component
    const handleInputChange = (e: React.ChangeEvent<{}>, value: string) => {
        setInstitution(value)
    }

    const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrent(e.target.checked);
    }



    return(
        <div className={classes.modalContent}>
            <Typography variant="h6" color="primary">Add New Education</Typography>
            <form onSubmit={handleSubmit}>
                <Autocomplete 
                id="institutions-list" 
                options={institutionList} 
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
                <div className={classes.inputGroup}>
                  <TextField className={`${classes.input} ${classes.mr}`} label="Degree Level" helperText="ex) Bachelor's, Master's, etc." variant="outlined" onChange={(e)=> setDegree(e.target.value)} required/>
                  <TextField className={classes.input} label="Field of Study" variant="outlined" onChange={(e)=> setFieldOfStudy(e.target.value)} required/>
                </div>
                <div className={classes.inputGroup}>
                    <MonthPicker className={`${classes.input} ${classes.mr}`} label="Start Month" id="startMonth" onChange={(e)=> setStart({...start, month: e.target.value})}/>
                    <YearPicker className={`${classes.input} ${classes.mr}`} label="Start Year" id="startYear" onChange={(e)=> setStart({...start, year: e.target.value})}/>
                    <MonthPicker className={`${classes.input} ${classes.mr}`} label="End Month" id="endMonth" onChange={(e)=> setEnd({...end, month: e.target.value})}/>
                    <YearPicker className={`${classes.input} ${classes.mr}`} label="End Year (or expected)" id="endYear" onChange={(e)=> setEnd({...end, year: e.target.value})}/>
                </div>
                <TextField className={classes.input} multiline fullWidth rows={2} variant="outlined" label="Description" onChange={(e)=> setDescription(e.target.value)}/>

                <div className={classes.inputGroup}>
                </div>
                <FormControlLabel
                      control={<Switch checked={current} onChange={handleSwitch} name="current" color="secondary"/>}
                      label="Current"
                />
                <Button variant="contained" className={classes.button} color="primary" type="submit" >Save</Button>
            </form>
        </div>
    )
}
export default EducationModalContent;