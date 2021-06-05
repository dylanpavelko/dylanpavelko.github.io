import * as React from 'react'
import { container,
         subhead,
         eighthourform,
         html,
         submitButton,
         formSpacing,
         outerContainer } from '../components/8hour.module.css'

class EightHourPage extends React.Component {
  render() {
    const siteTitle = "Dylan Pavelko's Personal Website"

    return (
      <main>
        <title>8 Hour Work Day</title>
        <div className={outerContainer}>
        <p>&nbsp;</p>
        <div id='container' className={container}>
          <p>&nbsp;</p>
          <p></p>
          <p align="center"><img src="http://www.dylanpavelko.com/8hour/8hourHeader.png" alt="8 Hour" /><br /></p>
          <p align="center" className={subhead}>Work an 8 Hour Day!</p>
          <form id="form1" name="form1" method="post" className={eighthourform} action="">
            <div id="fields">
              <div className={formSpacing}>
                <label>Clock In - </label><input type="time" id="startClockIn" defaultValue="08:00" />
              </div>
              <b>Break</b>
              <div className={formSpacing}>
                <label>Clock Out - </label><input type="time" id="breakClockOut" defaultValue="12:00" /><br />
                <label>Clock In - </label><input type="time" id="breakClockIn" defaultValue="12:30" />
              </div>
            </div>
            <div>
              <p align="center"><span id="submit" className={submitButton}>Submit</span></p>
              <span id="answer">
                  <p align="center">Press submit to calculate when you should clock out for 8 hours of work!<br /><br /><br /></p>
                </span>
            </div> 
          </form>
        </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            console.log('Plain JavaScript inside Gatsby!');

            $(document).ready(function() {
              function getClockInTime(){
                if(supportDates){
                  return $("#startClockIn").val();
                }else{
                  return Number($("#startHour").val()) + Number($("#startAMPM").val()) + ":" + Number($("#startMin").val());
                }
                
              }

              function getBreakClockOutTime(){
                if(supportDates){
                  return $("#breakClockOut").val();
                }else{
                  return Number($("#breakOutHour").val()) + Number($("#breakOutAMPM").val()) + ":" + Number($("#breakOutMin").val());
                }
              }

              function getBreakClockInTime(){
                if(supportDates){
                  return $("#breakClockIn").val();
                }else{
                  return Number($("#breakInHour").val()) + Number($("#breakInAMPM").val()) + ":" + Number($("#breakInMin").val());
                }
              }

              
                supportDates = ($('input').prop('type') == 'time');
                if(!supportDates){
                  $('#fields').hide();
                  $('#oldSchool').show();
                }



              $("#submit").click(function(){
                alert('clicked');
                var startTime   = new TimeEntry(getClockInTime());
                var startBreak  = new TimeEntry(getBreakClockOutTime());
                var endBreak  = new TimeEntry(getBreakClockInTime());

                var beforeBreakDuration = startTime.getDurationInMinutes(startBreak);
                var endTime = endBreak.addDurationInMinutes(MINUTES_PER_WORKDAY - beforeBreakDuration);

              
                $("#answer").html("<p align='center'><br/>To work 8 hours, clock out at <strong>" + endTime.getPrettyTime() + "</strong><br /><a href='http://www.facebook.com/dialog/feed?   app_id=111966075570086&amp;   link=http://www.dylanpavelko.com/8hour/index.php&amp;   picture=http://www.dylanpavelko.com/8hour/8hour.png&amp;   name=I get off of work at " + endTime.getPrettyTime() + "!&amp;   caption=8 Hour Calculator&amp;   description=Find out when you are off of work, using the 8 Hour Calculator http://www.dylanpavelko.com/8hour/&amp;   message=I get off of work at " + endTime.getPrettyTime() + "!&amp;   redirect_uri=http://www.facebook.com/' target='_blank'><br><img src='share.jpg' width='56' height='28' alt='Share' /></a> with your friends on facebook when you get off work!<br><br></p>");
              
                if((endTime.getPrettyHours() >11) && endTime.isPm()){
                  $("#answer").html("You are working too strange of hours, clock out sometime the next day!");
                }
              });
              
            });
        `
          }}
        />
      </main>
    )
  }
}

export default EightHourPage