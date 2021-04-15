import styles from '../styles/EOM.module.scss'
import {Toolbar} from '../components/toolbar'
export const EOM = ({employee}) => {
     console.log(employee)
     return (
          <div className="page-container">
               <Toolbar/>
               <div className={styles.main}>
                    <h1>  Employeee Of the Month </h1>
               </div>
              <div className={styles.employeeOfTheMonth}>
                   <h3>{employee.name}</h3>
                   <h6>{employee.position}</h6>
                   <img src={employee.image}/>
                   <h6>{employee.description}</h6>

              </div>
          </div>
     )

}


export const getServerSideProps = async pageContext => {
     const apiResponse = await fetch(
          'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
     )

     const employee = await apiResponse.json()

     return({
          props: {
               employee
          }
     }
     )

}

export default EOM;