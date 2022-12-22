export default class HolbertonCourse{
    constructor(name,length,students){
        if(typeof name !== 'string'){
            throw new Error('Name must be a string')
        }
        if(typeof length !== 'number'){
            throw new Error('Length must be a number')
        }
        if(!students instanceof Array){
            throw new Error('students must be an array')
        }
        for (let student in students){
            if(!student instanceof string){
                throw new Error('Each item in student array should be a string')
            }
        }
        this._name= name,
        this._length = length,
        this._students  = students

    }

    get course(){
        return (
            this._name= name,
            this._length = length,
            this._students  = students
    )
    }
    set course(course){
        this.course = 
    }
    
}
