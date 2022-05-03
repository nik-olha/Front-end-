import React from 'react';
import {Formik, Field, Form, FieldArray } from 'formik'
import './App.css';
import axios from 'axios'

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  friends: ["", "", ""],
  passions: [{name: '', type: ''}],
  language: {name: '', type: ''}

};

function App() {
  return (
    <div className="App">
    <Formik 
      initialValues={initialValues}
      onSubmit={(values)=> console.log(values)
    }
    >
     {({values}:any) => (
       <Form>
        <div>
          <Field id="userName" name="userName" placeholder="User Name"/>
        </div>
        <div>
          <Field id="firstName" name="firstName" placeholder="First Name"/>
        </div>
        <div>
          <Field id="lastName" name="lastName" placeholder="Last Name"/>
        </div>
        <div>
          <Field type="email" id="email" name="email" placeholder="email"/>
        </div>
        <div>
          <Field 
            type="password" 
            id="password" 
            name="password" 
            placeholder="password"/>
        </div>
        <div>
          <Field 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            placeholder="confirm password"/>
        </div>
        <div>
        <FieldArray name="friends">
          {({push, remove}:any)=>(
            <>
              <h3>friends</h3>
              {values.friends.map((fr: any, index: React.Key | null | undefined) => (
                <div key={index}>
                  <Field name={`friends.${index}`}/>
                  <button type="button" onClick={()=> push('')}>+</button>
                  <button type="button" onClick={()=> remove('')}>-</button>
                </div>
              ))}
            </>
          )}
        </FieldArray>
        <FieldArray name="passions">
          {({push, remove}:any)=>(
            <>
              <h3>passions</h3>
              {values.passions.map((ps: any, index: React.Key | null | undefined) => (
                <div key={index}>
                  <Field name={`passions.${index}.name`}/>
                  <Field name={`passions.${index}.type`}/>
                  <button type="button" onClick={()=> push({name:'', type:''})}>+</button>
                  <button type="button" onClick={()=> remove({name:'', type:''})}>-</button>
                </div>
              ))}
            </>
          )}
        </FieldArray>
        <FieldArray name="language">
          {()=>(
            <>
              <h3>language</h3>
             {Object.entries(values.language).map(([key])=>(
            
              <Field key={key} name={`language.${key}`}/>
     
             ))}
              
            </>
          )}
        </FieldArray>
      </div>
      <button type="submit">Submit</button>
      </Form>
     )}
      
    </Formik>
    </div>
  );
}


export default App
