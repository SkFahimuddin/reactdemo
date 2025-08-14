import './App.css';

function App() {
  return (
    <>
    <nav class="navbar" id="navbar">
      <div class="leftnav" id="leftnav">
        <div class="logo" id="logo">Logo</div>
        <div class="Exploree" id="Exploree">Exploree</div>
        <div class="home" id="home">Home</div>
        <div class="about" id="about">About</div>
        <div class="contact" id="contact">Contact</div>
      </div>
      <div class="rightnav" id="rightnav"> 
        <form>
          <input class ="input" id="input" type="search" placeholder="Search..."/>
          <button type="submit" >🔍</button>
        </form> 
      </div>
    </nav>
      
    </>
    



  );
}    

export default App;
