import React from "react";
import  ReactDOM  from "react";

import Card from './components/Cards'
import Sdata from './sdata'

ReactDOM.render(<>
{
Sdata.map((val)=>{
    console.log(val)
})
}

</>
,document.getElementById('root')
)