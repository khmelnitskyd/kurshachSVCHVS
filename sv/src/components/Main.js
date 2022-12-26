import React from "react";
import "./Main.css";

export default function Main() {
    return (
        <main className="Main">
            <section className="SectionInputs">
               <a>Let's fly</a>
            
                <div class="group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>From</label>
                </div>
                <div class="group">
                    <input type="text" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>To</label>
                </div>
                <div class="group">
                    <input type="date" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label></label>
                </div>
                <div class="group">
                    <input type="date" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label></label>
                </div>
                <button className="btnFind">Find tickets</button>
            </section>
        </main>
        
        
    )
}