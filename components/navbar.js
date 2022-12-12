
function navbarSection () {
    return ` <div id="navbar">
    <div>
        <a href="index.html"><img src="data:image/png;base64,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" alt="Coschedule icon" /></a>
        <h1><a href="index.html">CoSchedule</a></h1>
        <div class="dropdown">
            <span>Products</span>
            <div class="downmenu">
                <div>
                    <p>CONTENT CALENDARS</p>
                    <div>
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=48&q=75" alt="" />
                        <p>Marketing Calendars <br> <span>A calendar that helps you see, schedule, and share your marketing.</span></p>
                    </div>
                    <div>
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=48&q=75" alt="" />
                        <p>Marketing Suite <br> <span>A family of agile marketing products to coordinate your team, projects, and process.</span></p>
                    </div>
                </div>
                <div>
                    <p>CONTENT OPTIMIZATION</p>
                    <div>
                        <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_77217643bee6578bf2bde1b69e038bbf/headline-studio.png" alt="" />
                        <span>Headline Studio</span>
                    </div>
                    <p>MARKETING EDUCATION</p>
                    <div>
                        <img src="data:image/png;base64,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" alt="" />
                        <span>Actionable Marketing Institute</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <span>Why CoSchedule</span>
            <div class="downmenu1">
                <div id="customerStories">
                    <p>Customer Stories</p>
                    <br>
                    <span>See how CoSchedule customers have found success.</span>
                </div>
                <div>
                    <p>Build Your Case for CoSchedule</p>
                    <br>
                    <span>Get your custom ROI report & see what your team could save by switching to CoSchedule!</span>
                </div>
            </div> 
             
        </div>
        <div class="dropdown">
            <span>Resources</span>
            <div class="downmenu2">
                <div>
                    <p>TOOLS&nbsp;&nbsp;&nbsp;<span>FREE!</span></p>
                    <div>
                        <img src="https://i.postimg.cc/CzTRp5Mv/Screenshot-170-1.png" alt="" />
                        <p>Headline Analyzer <br> <span>Write headlines that drive traffic, shares, & search results.</span></p>
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/qtTfkf6H/Screenshot-170-2.png" alt="" />
                        <p>Email Subject Line Tester <br> <span>Write email subject lines that drive more opens, clicks, and conversions.</span></p>
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/tYYxpwFT/Screenshot-170-3.png" alt="" />
                        <p>Social Message Optimizer <br> <span>Create powerful social messages that convert.</span></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>LEARN</p>
                        <li>Marketing Blog</li>
                        <li>CoSchedule Guide</li>
                        <li>Agile Marketing Guide</li>
                        <li>Marketing Dictionary</li>
                        <br>
                        <p>BOOKS</p>
                        <li>10x Marketing Formula</li>
                        <li>Get Started with Agile Marketing</li>
                    </div>
                    <div>
                        <p>TOPIC LIBRARIES</p>
                        <li>Marketing</li>
                        <li>Marketing Ideas</li>
                        <li>Marketing Strategy</li>
                        <li>Content Marketing</li>
                        <br>
                        <p>REPORT</p>
                        <li>Marketing Strategy Report</li>
                    </div>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <a id="priceHover" href="pricing.html">Pricing</a>
        </div>
    </div>
    <div>
        <p><a id="aTagHover" href="signin.html">Sign In</a></p>
        <p><a id="aTagHover2" href="signin.html">Get A Demo</a></p>
        <button id="createCalBtn">Create My Calendar</button>
    </div>
</div>`
}

export default navbarSection;