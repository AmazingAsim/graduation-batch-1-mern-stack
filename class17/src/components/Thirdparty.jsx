import React from 'react'
import {useForm} from 'react-hook-form'
export default function Thirdparty() {
    const {register,handleSubmit,formState:{errors}}  = useForm();

    let submit = (data)=>{
        console.log(data)
    }
  return (
    <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('username',{required:true})} />
                 <p><small>{errors.username && 'this field is required'}</small></p>

                <input type="text" {...register('email',{required:true})} />
                 <p><small>{errors.email && 'this field is required'}</small></p>

                 <button type='submit'>button</button>
            </form>
    </div>
  )
}
