export default function getListStudentIds(fetchedArray){
    return !(fetchedArray instanceof Array)? []:fetchedArray.map(element=>element['id'])
}