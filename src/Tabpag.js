function Tabpag()
{
    const [arr,setarr]=([]);
        useEffect(()=>{
            axios.get('http://localhost:5004/createUser').then((res)=> {
              for(let i=0;i<res.data.length;i++){
                 arr.push(res.data[i]);
              }
            })
        },[])
        
    return(
        
    )
}
export default Tabpag;