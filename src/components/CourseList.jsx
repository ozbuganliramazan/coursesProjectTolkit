import { useSelector,useDispatch } from "react-redux"
import { removeCourse } from "../store/slices/courseSlice"

const CourseList = () => {
  const dispatch = useDispatch();
  const {courses} = useSelector(({courses:{data,searchTerm}})=>{
const filteredCourses = data.filter((course)=>course.name.toLowerCase().includes(searchTerm.toLowerCase()))
    //return state.courses.data
    return{
      courses:filteredCourses
    }
  })

const renderedCourses =courses.map((data,i)=>(
  <div key={i} className="panel">
      <h1>{data.name} </h1>
      <p>{data.description} </p>
      <p>{data.cost} </p>
      <button className="button is-danger"  onClick={()=>{dispatch(removeCourse(data.id))}}>Sil</button>
  </div>
   ));


  return (
    <div className="courseList">{renderedCourses} </div>
      
   
  )
}

export default CourseList
