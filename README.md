HOC: AdvanceComponent which reduces code repeat and improve usable
A function with function parameter that return a component
Some Component may have same code, for example:
    The web Requests are doing content list but different URL, to reduce the code on component, HOC could use to call component with different props and return different render.

const withName =(paraFunc)=>{
    return class extends React.Component{
        render(){
            return(
                <paraFunc {...this.props}/>
            )
        }
    }
}

Component Async:
In a big project, there might be massive jsx file. If they are all loaded after DOM mounted and some are not used, the memory is wasted.
The, use React.lazy(()=>import()) and Suspense
 <Suspense fallback={<div>...loading</div>}>
    <Other/>
</Suspense>
this says when import not finish display content inside fallback

Context:
The jsx file could call each other. The code might be redundant and repeat when calling layer is so many with props. For example, A needs to use C with props title, C needs B calling with props title,...
The way to directly passing title from A to C is to use Provider and Consumer
export const {Provider,Consumer} = React.createContext("default data")
from Provider component A
<Provider value="dark">
        <B/>
</Provider>
Consumer C
<Consumer>
    {
        value =>{
            return<button>{value}</button>
        }
    }
</Consumer>

ErrorBorder
Sometimes system has invisiable error which collaspe the whole page,
to avoid give check after DOM rendered
getDerivedStateFromError(error){
    return hasError:true
    //this function is called when there is an error
}

PropsType is used to check The type of props passed
This is to fixed title type string
Greeting.propTypes = {  //if the props passed is not string, warning
    title:PropTypes.string
}

<React.Fragment> is used to displayed or not displayed component in a fixed condition without further <div>. <></> equals to <React.Fragment>

Change DOM could use Ref.  <p ref={this.text}>Text</p> 
Target p tag, this.text.current.innerHTML="New Text" change content

StrictMode is used to detect outdate API using only valid when development

Optimise 1: render necessary only if it is needed
a: give if condition mount component when content is changed
b: React.PureComponent{render()} same with a

Optimise 2: avoid there following bug
 * 1. time counter: component destruction-> cancle time counter
 * 2. network request: component destruction-> cancle request
 * 3. event listening: component destruction-> destroy event function