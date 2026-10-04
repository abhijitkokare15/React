import { useForm } from "react-hook-form"
import {zod} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
//definning schema
const formSchema=z.object({name:z.string().min(3,"min lenght is 3").max(20,"max is 20"),
   age:z.number().min(10,"min-10").max(100,"max-100"),
   password:z.string().min(3,"min lenght is 3").max(20,"max is 20")
})

function ZodForm() {

  const { register, handleSubmit,formState :{errors}} = useForm({resolver:zodResolver(formSchema)})

  function submitForm(data) {
    console.log(data)
  }

  console.log("render")

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>

        <div>
          <label htmlFor="first">Name: </label>
          <input id="first" {...register("name",{required:"cant be empty"})} />
        </div>

        <div>
          <label htmlFor="second">Age: </label>
          <input id="second" {...register("age")} />
        </div>

        <div>
          <label htmlFor="third">Password: </label>
          <input id="third" {...register("password")} />
        </div>

        <button type="submit">Submit</button>

      </form>
    </>
  )
}

export default ZodFrom