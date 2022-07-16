import React, {useEffect,useState} from 'react';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
//import ArticleService from '../../Services/Article-Service';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';
import ScategorieService from '../../Services/Scategorie-Service';
import Navbarre from '../Navbarre';


const ListScategories = () => {

    const [scategories, setScategories] = useState([]);
    useEffect(() => {
        GetListScategories();
        console.log(scategories)
    },[]); 
  
    const GetListScategories=async()=>{
        await ScategorieService.fetchScategories()
            .then((res) => {
              setScategories(res.data);
            });
    }
    const delScategorie=async(_id)=>{
        await ScategorieService.deleteScategorie(_id)
        var newscategories=scategories.filter((item)=>{
            console.log(item)
            return item._id!==_id
        })
        setScategories(newscategories);
    }
    


    const columns = [
        {
         name: "nomscategorie",
         label: "Nom S-Categorie",
         options: {
            filter: true,
            sort: false,
           }
         
         
        },
        {
            name: "categorieID",
            label: "Categorie", 
            options:{
                customBodyRender:(categ)=>(
                    categ? categ.nomcategorie:null
                ),
                filter: true,
                sort: false,
            }  
        },
        {
            name: "_id",
            label: "Actions", 
            options:{
                customBodyRender:(value)=>(
                    <div>
                        <IconButton>
                            {   <Link to={"/Scategories/edit"+value}>
                                    <EditIcon color='secondary'/>
                                </Link>
                            }
                        </IconButton>

                        <IconButton onClick={()=>delScategorie(value)}>        
                            <DeleteIcon sx={{color:pink[500]}}/>
                        </IconButton>           
                                     
                    </div>
                    //scateg? scateg.nomscategorie:null
                ),
                filter: true,
                sort: false,
            }                
        },
    ];
       
    //    const data = [
    //     { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    //     { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    //     { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    //     { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    //    ];
       
    //    const options = {
    //    filterType: 'checkbox',
    //   };

  return (
    <div>
        <Navbarre/>
        {scategories.length>0 ?
            <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                    title={"List Sous-Categories data tables"}
                    data={scategories}
                    columns={columns}
                    //options={options}
                />
            </ThemeProvider>
            :null
        }
        
    </div>
  )
}

export default ListScategories;
