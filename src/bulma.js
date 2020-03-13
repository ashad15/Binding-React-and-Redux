import React from 'react';

class First extends React.Component
{
    render()
    {
        return( <div class="block">
                <button class="button is-large is-info">Large button</button>
                <button class="button is-large is-success">Large button</button>
                <button class="button is-large is-warning">Large button</button>
                <button class="button is-large is-danger">Large button</button>
                <button class="button is-large is-primary">Large button</button>
            
            
            <div class="block">
            <nav class="nav">
               
                    <div class="nav-right">
                    <a class="nav-item">left</a>
                    </div>
                    <div class="nav-center">
                    <a class="nav-item">right</a>
                    </div>
                
            </nav>
            </div>
            <div class="block" >
                <div class="message-header">Header</div>
                <div class="message-body"> <p>This is the very basic message </p> </div>
            </div>

         <span class="tag is-warning"> tag</span>
         <div class="block">
             <aside class="menu">
                 <p class="menu-label nav-right">title</p>
                 <ul class="menu-list">
                     
                 <li><h1>first</h1></li>
                 <h1>second</h1>
                 <h1>third</h1>

                 </ul>
             </aside>
         </div>





            </div>
        )
    }
}
export default First;