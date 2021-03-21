import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Search from '../Search/Search';

const Path = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const[result,setResult]=useState(false)
    const[place,setPlace]=useState({})
    const onSubmit = data => {
        setPlace(data)
        setResult(true)
    }
    console.log(place)
    
    let { id } = useParams();
    id=parseInt(id);
    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12'>
               {!result && <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                    <input name="source" type='text' placeholder='Pick from' ref={register({ required: true })}/>
                    <br></br>
                    <input name="destination" type='text' placeholder='Pick to'ref={register({ required: true })} />
                    <br></br>
                    <input className='submit' type="submit" value='Search' />
                </form>}
                {result && <Search id={id} place={place}></Search>}
            </div>
            <div className='col-md-6 col-sm-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616259915774!5m2!1sen!2sbd" width="100%" height="100%" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Path;