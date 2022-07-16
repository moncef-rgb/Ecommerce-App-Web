import Api from "../Axios/Api";
const SCATEGORIE_API="/scategories"

const fetchScategories=async()=> {
    return await Api.get(SCATEGORIE_API);
}
const fetchScategorieById=async(scategorieId)=> {
    return await Api.get(SCATEGORIE_API + '/' + scategorieId);
}
const deleteScategorie=async(scategorieId) =>{
    return await Api.delete(SCATEGORIE_API + '/' + scategorieId);
}
const addScategorie=async(scategorie)=> { 
    return await Api.post(""+SCATEGORIE_API, scategorie);

}    
const editScategorie=(scategorie) =>{ 
    return Api.put(SCATEGORIE_API + '/' + scategorie.id, scategorie);

}
const fetchScategorieByCat=async(catId)=> {
    return await Api.get(SCATEGORIE_API + '/cat/' + catId);
    
 }   
const ScategorieService = {
    fetchScategories,
    fetchScategorieById,
    deleteScategorie,
    addScategorie,
    editScategorie,
    fetchScategorieByCat
}

export default ScategorieService;