import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
     
    const [imageUrl, setImageUrl] = useState(null);

     const onSubmit = data => {
         const eventData = {
             name: data.name,
             imageUrl: imageUrl
         };

         const url =`https://pure-sea-11849.herokuapp.com/addEvent`
         console.log(data)

         fetch(url,{
             method: 'POST',
             headers:{
                 'Content-Type': 'application/json'
             },
             body:JSON.stringify(eventData)
         })
         .then(response => console.log(response))
     };

  const handleImageUpload = event => {
      console.log(event.target.files[0]);
      const imageData = new FormData();
      imageData.set('key', 'f20ae2939d4d481ae3c9d8168dbd84d2');
      imageData.append('image', event.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
    
      <input name="name" defaultValue="New exciting Event" {...register("name")} />
      <br/>
      <br/>
      <input type="file" onChange={handleImageUpload} />
      <br/>
      <br/>
      <input disabled={imageUrl ? false : true}  type="submit" />
      <br/>

    </form>
        </div>
    );
};

export default AddEvents;