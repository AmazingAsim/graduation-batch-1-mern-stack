import './App.css';
import Lang from './components/Lang';

function App() {
  let languages = [
    {
      title:"HTML",
      desc:"stands for hyper text markup language and blah"
    },
    {
      title:"css",
      desc:"it stands for cascading style sheet and use to style your website"
    },
    {
      title:"javascript",
      desc:"use to add actions to user website and make the website interative"
    }
  ]
  return (
    <div className="App">
      <div className="container-fluid bg-warning p-2">
          <Lang title="Mern Stack" desc="The MERN stack is a collection of 
          technologies that help developers build robust and scalable web applications
           using JavaScript. The acronym “MERN” stands for MongoDB, Express, React,
            and Node. js, with each component playing a role in
             the development process" />
      </div>

      <div className="container">
         <div className="row">
         {
                languages.map(lang=>(
                  <div className='col-sm-4'>
                    <Lang title={lang.title} desc={lang.desc} />
                  </div>
                ))
              }
         </div>
      </div>  
    </div>
  );
}

export default App;

