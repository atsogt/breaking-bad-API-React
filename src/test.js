// constructor(){
//     super();

//     this.state = {
//       characters: [],
//       searchField: ''
//     }
   
//   }

//   componentDidMount(){
//     fetch("https://www.breakingbadapi.com/api/characters")
//     .then((res)=>res.json())
//     .then((char)=> this.setState(
//       ()=>{return {characters: char}}
//     ))
    
//   }

//   onSearchChange = (e)=>{
//     console.log(e.target.value)
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return {searchField}
//     })
//   }

//   render(){

//     const {onSearchChange} = this;
//     const {characters, searchField} = this.state;

//     const filteredArr= characters.filter((char)=>{
//       return char.name.toLocaleLowerCase().includes(searchField)
//     })
    
//     return(
//       <div className='App'>
//       <input type='search' placeholder='Search' onChange={onSearchChange}/>
     
//       <CardList characters={filteredArr}/>
//      </div>
//     )
//   }}