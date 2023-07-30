import React from "react";

import Select from "./sub-component/Select.js";
import Search from "./sub-component/search.js";
import Items from "./sub-component/Items.js";



import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";




const Dashboard = () => {
  return (
    <div className="container">

                                {/* row 1 */}

      <div className="row border-bottom">
        <div className="col-8">
          <Typography level="h1" component="h1" color="light" pt={3}>
            323 Stay in Melbourn
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            Hurry up plan your journey!
          </Typography>
        </div>
        <div className="col-4 d-flex justify-content-around my-4">
          <div>
            <Button color="neutral" disabled={false} onClick={function () {}} size="lg" py={3} variant="outlined">
              Shared
            </Button>
          </div>
          <div>
            <Button color="primary" disabled={false} onClick={function () {}} size="lg" variant="soft">
             <i className="fa-regular fa-star mx-2"></i>Save Search
            </Button>
          </div>
        </div>
      </div>

                    {/* row 2 */}
            
      <div className="row my-4">        
      <div className="col-9"> 
        <div className="row gx-4">
        <div className="col-4">    {/* select for city */}     
          <Select />
        </div>
        <div className="col-4">      {/* Date */}
          <Input            
            type="date"
            slotProps={{
                input: {
                    min: "2018-06-07T00:00",
                    max: "2018-06-14T00:00",
                },
            }}
            />
        </div>
        <div className="col-4">          {/* budge */}
        <Input
        type="number"
        defaultValue={2.5}
        placeholder="set your Budge"
        slotProps={{
            input: {
                min: 1,
                max: 5,
                step: 0.1,
            },
        }}
        />
        </div>
      </div>   
            {/* row 3  for Search destination*/}
        
        <div className="row my-3 gx-5">
            <div className="col-10"> <Search/> </div>   {/*  search for destination*/}
            <div className="col-2"> 
                <Button color="primary" disabled={false} onClick={function () {}} size="md" variant="solid">
                 Search
                </Button>
            </div>
        </div>  
        <div className="row rounded-2 List">
            <div className="col-12 scroll-y">
                <Items/>
                <Items/>
                <Items/>
                
            </div>
            </div>      
</div>  
</div>  
</div>
  );
};

export default Dashboard;
