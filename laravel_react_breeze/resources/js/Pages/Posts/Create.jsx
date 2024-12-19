import { useForm } from "@inertiajs/react";
import React from "react";


export default function Create() {
    const { data, setData,errors, post} = useForm({
        title: "",
        body: ""
    })

    console.log(data)

    function handleSubmit(e){
        e.preventDefault();
        post(route("post.store"));
        // alert('Data Sent')
    }
    return (
        <>
            <div>
                <h1>Post Entry</h1>
                <form  onSubmit={handleSubmit}>
                    <fieldset>
                    Title: <br /><input type="text" name="title" placeholder="Enter Title" value={data.title} onChange={(e)=> setData('title', e.target.value)} /> <span>{errors.title}</span><br />
                    Body: <br />
                    <textarea
                        name="body"
                        id=""
                        placeholder="Enter Body" onChange={(e)=> setData('body', e.target.value)}
                    >{data.body}</textarea> <span>{errors.body}</span><br />
                    <button type="submit" name="submit">SUBMIT</button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}
