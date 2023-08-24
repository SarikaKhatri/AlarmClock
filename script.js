
// selecting the current time element
let clockElement= document.getElementById('current-time');
let alarmList = document.getElementById('alarmList');

// Function to update the list of alarms on the web page
function updateAlarmList() {
  alarmList.innerHTML = '';
  alarms.forEach((alarm, index) => {
    const listItem = document.createElement('li');
    //for adding styles to li elements
    listItem.classList.add('dynamic-list-item');
    listItem.innerHTML = `${alarm.time}  ${alarm.message} <button onclick="deleteAlarm(${index})"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>`;
    alarmList.appendChild(listItem);
  });
}

// Function to show current time
function showCurrentTime() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  clockElement.textContent = `${formattedTime}`;
}
//updating the time every second
setInterval(() => showCurrentTime(), 1000);

// Function to set an alarm
function setAlarm() {
  const alarmTimeInput = document.getElementById('alarmTime');
  const alarmMessageInput = document.getElementById('alarmMessage');

  const alarmTime = alarmTimeInput.value;
  const alarmMessage = alarmMessageInput.value;
  const currentTime = new Date();
  const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  if (alarmTime && alarmMessage) {
      alarms.push({ time: alarmTime, message: alarmMessage });
      alarmTimeInput.value = '';
      alarmMessageInput.value = '';
      updateAlarmList();
    }
}
// Function to delete an alarm
function deleteAlarm(index) {
  alarms.splice(index, 1);
  updateAlarmList();
}
// Function to check for alarms and show alerts
function checkAlarms() {
  const currentTime = new Date();
  const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  alarms.forEach((alarm, index) => {
    if (alarm.time == formattedTime) {
      alert(`ALERT! Alarm: ${alarm.message}`);
      deleteAlarm(index);
    }
  });
}
// Array to store the list of alarms
let alarms = [];
// Update the list of alarms initially
updateAlarmList();
// Check for alarms every second
setInterval(checkAlarms, 1000);
