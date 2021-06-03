<!DOCTYPE html>
<!-- Developed by Dylan Pavelko (c) August 2011 -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>8 Hour Work Day</title>
  <link rel="icon" type="image/png" href="http://www.dylanpavelko.com/favicon.png" />
  
  <meta name="google-site-verification" content="lhRg7pdhOZGBBVBTDy9uAq-oAaDPHyy6h_RO3Qke188" />

  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <script type="text/javascript" src="../Scripts.js"></script>
  <script type="text/javascript">
    const MINUTES_PER_HOUR    = 60;
  const MINUTES_PER_WORKDAY = 8 * 60;

  var supportDates = false;

  var TimeEntry = function(timestamp) {
    var parts     = timestamp.split(":");
    this.hours    = parseInt(parts[0]);
    this.minutes  = parseInt(parts[1]);
  };

  TimeEntry.prototype.getDurationInMinutes = function(timeEntry) {
    var hourDelta   = timeEntry.getHours() - this.hours;
    var minuteDelta = timeEntry.getMinutes() - this.minutes;

    return (hourDelta * MINUTES_PER_HOUR) + minuteDelta;
  };

  TimeEntry.prototype.addDurationInMinutes = function(duration) {
    var combinedMinutes  = this.minutes + duration
    var durationHours    = Math.floor(combinedMinutes / MINUTES_PER_HOUR);
    var remainingMinutes = combinedMinutes - (durationHours * MINUTES_PER_HOUR);

    var combinedHours    = this.hours + durationHours;
    var ampm       = "AM";

    return new TimeEntry(combinedHours + ":" + remainingMinutes);
  }

  TimeEntry.prototype.getPrettyTime = function() {
    var prettyHours = this.hours;
    var ampm = "AM";

    if(prettyHours > 12) {
      prettyHours -= 12;
      ampm = "PM";
    }

    var prettyMinutes = 0;
    if(this.minutes < 10){
      prettyMinutes = "0"+this.minutes;
    }else{
      prettyMinutes = this.minutes;
    }

    return prettyHours + ":" + prettyMinutes + " " + ampm;
  }

  TimeEntry.prototype.getPrettyHours = function() {
    return this.hours > 12 ? this.hours - 12 : this.hours;
  }

  TimeEntry.prototype.isAm = function() {
    return this.hours < 12;
  }

  TimeEntry.prototype.isPm = function() {
    return this.hours >= 12;
  }

  TimeEntry.prototype.getHours = function() {
    return this.hours;
  };

  TimeEntry.prototype.getMinutes = function() {
    return this.minutes;
  }

  </script>

<style type="text/css">
  body{
    background-color:#CCC;
  }

  input[type=time] {
    font-family: "Times New Roman";
    font-size: 1.1em;
  }

  #form1 {
    text-align: center;
  }

  .formFieldGroup {
    padding: 15px 10px;
  }

  .subhead {
    font-weight: bold;
    font-style: italic;
    font-size: x-large;
  }
  
  a:visited{
    color:blue;
  }

</style>
</head>

<body>

<div id="container" style="background-color:#FFF;width:40em;margin-right:auto;margin-left:auto;box-shadow: 10px 10px 5px #888;">


<iframe src="https://www.facebook.com/plugins/like.php?app_id=156745904404324&amp;href=http%3A%2F%2Fwww.dylanpavlko.com%2F8hour%2Findex.php%2F&amp;send=false&amp;layout=standard&amp;width=450&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:60px;padding:1em;" allowTransparency="true"></iframe>

<p align="center"><img src="http://www.dylanpavelko.com/8hour/8hourHeader.png" alt="8 Hour" /><br /></p>
<p align="center" class="subhead">Work an 8 Hour Day!</p>
<form id="form1" name="form1" method="post" action=""> 
  <div id="fields">
  <div class="formFieldGroup">
    <label for="startClockIn">Clock In - </label><input type="time" id="startClockIn" value="08:00" />
  </div>
  <b>Break</b>
  <div class="formFieldGroup">
    <label for="breakClockOut">Clock Out - </label><input type="time" id="breakClockOut" value="12:00" /><br />
    <label for="breakClockIn">Clock In - </label><input type="time" id="breakClockIn" value="12:30" />
  </div>
  </div>
  <div id="oldSchool" style="display:none">
    <table width='324' border='0' align='center'>
    <tr>
      <td width='96' align='right'>Clock In - </td>
      <td width='218'><select  class='select' name='startHour' id='startHour'>
        <option value='0'>12</option>
        <option value='1'>01</option>
        <option value='2'>02</option>
        <option value='3'>03</option>
        <option value='4'>04</option>
        <option value='5'>05</option>
        <option value='6'>06</option>
        <option value='7'>07</option>
        <option value='8' selected='selected'>08</option>
        <option value='9'>09</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
      </select>
:
<select class='select' name='startMin' id='startMin'>
  <option value='0'>00</option>
  <option value='1'>01</option>
  <option value='2'>02</option>
  <option value='3'>03</option>
  <option value='4'>04</option>
  <option value='5'>05</option>
  <option value='6'>06</option>
  <option value='7'>07</option>
  <option value='8'>08</option>
  <option value='9'>09</option>
  <option value='10'>10</option>
  <option value='11'>11</option>
  <option value='12'>12</option>
  <option value='13'>13</option>
  <option value='14'>14</option>
  <option value='15'>15</option>
  <option value='16'>16</option>
  <option value='17'>17</option>
  <option value='18'>18</option>
  <option value='19'>19</option>
  <option value='20'>20</option>
  <option value='21'>21</option>
  <option value='22'>22</option>
  <option value='23'>23</option>
  <option value='24'>24</option>
  <option value='25'>25</option>
  <option value='26'>26</option>
  <option value='27'>27</option>
  <option value='28'>28</option>
  <option value='29'>29</option>
  <option value='30'>30</option>
  <option value='31'>31</option>
  <option value='32'>32</option>
  <option value='33'>33</option>
  <option value='34'>34</option>
  <option value='35'>35</option>
  <option value='36'>36</option>
  <option value='37'>37</option>
  <option value='38'>38</option>
  <option value='39'>39</option>
  <option value='40'>40</option>
  <option value='41'>41</option>
  <option value='42'>42</option>
  <option value='43'>43</option>
  <option value='44'>44</option>
  <option value='45'>45</option>
  <option value='46'>46</option>
  <option value='47'>47</option>
  <option value='48'>48</option>
  <option value='49'>49</option>
  <option value='50'>50</option>
  <option value='51'>51</option>
  <option value='52'>52</option>
  <option value='53'>53</option>
  <option value='54'>54</option>
  <option value='55'>55</option>
  <option value='56'>56</option>
  <option value='57'>57</option>
  <option value='58'>58</option>
  <option value='59'>59</option>
</select>
<select class='select' name='startAMPM' id='startAMPM'>
  <option value='0'>AM</option>
  <option value='12'>PM</option>
</select></td>
    </tr>
  </table>
  <p align='center'>Break</p>
  <table width='324' border='0' align='center'>
    <tr>
      <td width='96' align='right'>Clock Out  -</td>
      <td width='218'><select class='select' name='breakOutHour' id='breakOutHour'>
        <option value='0' selected='selected'>12</option>
        <option value='1'>01</option>
        <option value='2'>02</option>
        <option value='3'>03</option>
        <option value='4'>04</option>
        <option value='5'>05</option>
        <option value='6'>06</option>
        <option value='7'>07</option>
        <option value='8'>08</option>
        <option value='9'>09</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
      </select>
        :
        <select class='select' name='breakOutMin' id='breakOutMin'>
          <option value='0'>00</option>
          <option value='1'>01</option>
          <option value='2'>02</option>
          <option value='3'>03</option>
          <option value='4'>04</option>
          <option value='5'>05</option>
          <option value='6'>06</option>
          <option value='7'>07</option>
          <option value='8'>08</option>
          <option value='9'>09</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
          <option value='32'>32</option>
          <option value='33'>33</option>
          <option value='34'>34</option>
          <option value='35'>35</option>
          <option value='36'>36</option>
          <option value='37'>37</option>
          <option value='38'>38</option>
          <option value='39'>39</option>
          <option value='40'>40</option>
          <option value='41'>41</option>
          <option value='42'>42</option>
          <option value='43'>43</option>
          <option value='44'>44</option>
          <option value='45'>45</option>
          <option value='46'>46</option>
          <option value='47'>47</option>
          <option value='48'>48</option>
          <option value='49'>49</option>
          <option value='50'>50</option>
          <option value='51'>51</option>
          <option value='52'>52</option>
          <option value='53'>53</option>
          <option value='54'>54</option>
          <option value='55'>55</option>
          <option value='56'>56</option>
          <option value='57'>57</option>
          <option value='58'>58</option>
          <option value='59'>59</option>
        </select>
        <select class='select' name='breakOutAMPM' id='breakOutAMPM'>
          <option value='0'>AM</option>
          <option value='12' selected='selected'>PM</option>
      </select></td>
    </tr>
    <tr>
      <td align='right'>Clock In - </td>
      <td><select class='select' name='breakInHour' id='breakInHour'>
        <option value='0' selected='selected'>12</option>
        <option value='1'>01</option>
        <option value='2'>02</option>
        <option value='3'>03</option>
        <option value='4'>04</option>
        <option value='5'>05</option>
        <option value='6'>06</option>
        <option value='7'>07</option>
        <option value='8'>08</option>
        <option value='9'>09</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
      </select>
        :
        <select class='select' name='breakInMin' id='breakInMin'>
          <option value='0'>00</option>
          <option value='1'>01</option>
          <option value='2'>02</option>
          <option value='3'>03</option>
          <option value='4'>04</option>
          <option value='5'>05</option>
          <option value='6'>06</option>
          <option value='7'>07</option>
          <option value='8'>08</option>
          <option value='9'>09</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30' selected='selected'>30</option>
          <option value='31'>31</option>
          <option value='32'>32</option>
          <option value='33'>33</option>
          <option value='34'>34</option>
          <option value='35'>35</option>
          <option value='36'>36</option>
          <option value='37'>37</option>
          <option value='38'>38</option>
          <option value='39'>39</option>
          <option value='40'>40</option>
          <option value='41'>41</option>
          <option value='42'>42</option>
          <option value='43'>43</option>
          <option value='44'>44</option>
          <option value='45'>45</option>
          <option value='46'>46</option>
          <option value='47'>47</option>
          <option value='48'>48</option>
          <option value='49'>49</option>
          <option value='50'>50</option>
          <option value='51'>51</option>
          <option value='52'>52</option>
          <option value='53'>53</option>
          <option value='54'>54</option>
          <option value='55'>55</option>
          <option value='56'>56</option>
          <option value='57'>57</option>
          <option value='58'>58</option>
          <option value='59'>59</option>
        </select>
        <select class='select' name='breakInAMPM' id='breakInAMPM'>
          <option value='0'>AM</option>
          <option value='12' selected='selected'>PM</option>
        </select></td>
    </tr>
  </table>
  </div>
  <div class="formFieldGroup">
    <p align="center"><span id="submit" style="background-color:#CCC;padding:.7em">Submit</span></p>
    <span id="answer">
        <p align="center">Press submit to calculate when you should clock out for 8 hours of work!<br /><br /><br /></p>
      </span>
  </div>
</form>
<script type="text/javascript">
<!--


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
-->
</script>
</div>
<p align="center"><br />
  <script type="text/javascript">
    <!--
      footer();
    -->
    </script>
        
</p>

<!-- Developed by Dylan Pavelko (c) August 2011 -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-15319655-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</body>
</html>