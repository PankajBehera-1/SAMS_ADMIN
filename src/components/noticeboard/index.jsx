import React, { useState } from 'react';

import { Grid } from '@mui/material';
import style from "./style.module.css";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ResponsiveDrawer from '../../common/sidebar';



const Noticeboard = () => {

  return (
    <>
      <Grid>
        <ResponsiveDrawer />
      </Grid>

      <Grid className={style.main}>
        <h1>Notice Board</h1>
        <Grid className={style.wrapper}>
          <Grid className={style.input}>

            <Grid className={style.item}>
              <label>Date:</label><br></br>

              <input type='date' />
            </Grid>
            <Grid className={style.item}>
              <label>Notice title: </label><br></br>
              {/* <input type="text" value={newTitle} onchange={(e)=>setNewTitle(e.target.value)} placeholder='Notice Title' /> */}
              <textarea rows="2" cols="30"></textarea>
            </Grid>
            <Grid>
              <Grid className={style.file}>
                <input type='file' id='file' />
                <label for='file'>Upload file</label>
              </Grid>

              {/* <input type="file" value={newPdf} onchange={(e)=>setNewPdf(e.target.value)} placeholder='Notice pdf' /> */}

            </Grid>

            <Grid className={style.item}>
              <button type='button' className={style.primarybtn}>Add</button>
            </Grid>
          </Grid>
          <Grid className={style.firstlist}>
            <Grid className={style.list}>
              {/* {allNotice.map((item,index)=>{
                return(
               <Grid className={style.listitem} key={index} >
              <h3>{item.Date}</h3>
              <p>{item.Title}</p>
              <h5>{item.Pdf}</h5> */}

              <Grid className={style.listitem}>
                <Grid className={style.date}>
                  <h3>27 <br></br>
                    April</h3>
                  <p>2023</p>

                </Grid>
                <Grid className={style.content}>
                  <h5>2nd Unit Test for 5th semester, B.Tech students-2023  </h5>
                  <h2><PictureAsPdfIcon /></h2>


                  <Grid className={style.icon}>
                    <DeleteSharpIcon />
                  </Grid>
                </Grid>

              </Grid>


            </Grid>
          </Grid>

        </Grid>
      </Grid>

    </>
  );
}

export default Noticeboard;