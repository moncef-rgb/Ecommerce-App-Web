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
//import Listscategories from '../Scategories/Listscategories';
import CategorieService from '../../Services/Categorie-Service';
import Navbarre from '../Navbarre';


const ListCategories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        GetListCategories();
        console.log(categories)
    },[]); 
  
    const GetListCategories=async()=>{
        await CategorieService.fetchCategories()
            .then((res) => {
              setCategories(res.data);
            });
    }
    const delCategorie=async(_id)=>{
        await CategorieService.deleteCategorie(_id)
        var newcategories=categories.filter((item)=>{
            console.log(item)
            return item._id!==_id
        })
        setCategories(newcategories);
    }
    


    const columns = [
        {
         name: "nomcategorie",
         label: "Nom Categorie",
         options: {
            filter: true,
            sort: false,
           }
         
         
        },
        {
            name: "imagecategorie",
            label: "Image",
            options: {
                customBodyRender : (rowData)=>(
                    <img 
                        style={{height:60,borderRadius:'50%'}}
                        src={rowData}
                        alt=""
                    />
                ),
                filter: true,
                sort: false,
            },
        },
        {
            name: "_id",
            label: "Actions", 
            options:{
                customBodyRender:(value)=>(
                    <div>
                        <IconButton>
                            {   <Link to={"/Categories/edit"+value}>
                                    <EditIcon color='secondary'/>
                                </Link>
                            }
                        </IconButton>

                        <IconButton onClick={()=>delCategorie(value)}>        
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
        {categories.length>0 ?
            <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                    title={"List Categories data tables"}
                    data={categories}
                    columns={columns}
                    //options={options}
                />
            </ThemeProvider>
            :null
        }
        
    </div>
  )
}

export default ListCategories;
