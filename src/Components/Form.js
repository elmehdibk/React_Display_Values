import {useState} from 'react';
function Form(){
    const [name,setName]=useState('');
    const [nums,setNums]=useState([]);
    
    const check=(e)=>{
        if(!nums.includes(e.target.value)){
            setNums([...nums,e.target.value]);
        }else{
            setNums([...nums.filter((items)=>items!== e.target.value)]);
        }
    }
   
    const onSub=(e)=>{
        e.preventDefault();
            
        alert(`Hello ${name} you checked this Numbers ${nums.join(',')}`);
    }
    // const onCLick=()=>{
    //     if(name){
    //         document.getElementById('name').innerHTML=`hello ${name}`;
    //     }
    // };
        return(
        <>
            
            <div>
            <form onSubmit={onSub}>
              <label >Name</label>
              <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
              <input type='checkbox' value='1' onChange={(e)=>(e)=check(e)} />1<br/>
              <input type='checkbox' value='2' onChange={(e)=>(e)=check(e)} />2<br/>
              <input type='checkbox' value='3' onChange={(e)=>(e)=check(e)} />3<br/>
              <input type='checkbox' value='4' onChange={(e)=>(e)=check(e)} />4<br/>
              <input type='checkbox' value='5' onChange={(e)=>(e)=check(e)} />5<br/>
              <input type='submit'/>
              </form>
            </div>
        </>
    )
}


export default Form;