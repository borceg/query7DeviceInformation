// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var window = Titanium.UI.createWindow({  
    title:'Query7 Device Information',
    backgroundColor:'#F3F1E9',
});


var label_title = Titanium.UI.createLabel({

    height:40,
    top:0,
    left:0,
    width: '100%',
    backgroundColor: '#3F464F',
    color: '#F3F1E9',
    textAlign: 'center',
    text: 'Query7 Device Information',


});


var label_platform_name = Titanium.UI.createLabel({

    height: 40,
	top:50,
    color: '#31363E',
    font: {fontSize:15},
	text: 'Device: ' + Titanium.Platform.model,

});


var label_memory_usage = Titanium.UI.createLabel({

	height:40,
	top:100,
    color: '#31363E',
    font: {fontSize:15},
	text: 'Free RAM: ' + Math.round(Titanium.Platform.availableMemory / 1024) + 'mb',

});

setInterval(function()
{
	label_memory_usage.text = 'Free RAM: ' + Math.round(Titanium.Platform.availableMemory / 1024) + 'mb'
},120);



if(Titanium.Network.online)
{
    text_internet_status = 'Internet via ' + Titanium.Network.networkTypeName;
}
else
{
    text_internet_status = 'No Internet Access';
}

var label_internet_status = Titanium.UI.createLabel({

    height:40,
    top:150,
    color: '#31363E',
    font: {fontSize:15},
    text: text_internet_status,


});


var label_mac_address = Titanium.UI.createLabel({

	height:40,
	top:200,
    color: '#31363E',
    font: {fontSize:15},
	text: 'MAC Address: ' + Titanium.Platform.macaddress,

});

var label_cpu_info = Titanium.UI.createLabel({

	height:40,
	top:250,
    color: '#31363E',
    font: {fontSize:15},
	text: Titanium.Platform.ostype + ' CPU',

});

var label_version = Titanium.UI.createLabel({

    height:40,
    top:300,
    color: '#31363E',
    font: {fontSize:15},
    text: 'Android: ' + Titanium.Platform.version,

});

window.add(label_title);
window.add(label_platform_name);
window.add(label_memory_usage);
window.add(label_internet_status);
window.add(label_mac_address);
window.add(label_cpu_info);
window.add(label_version);

window.open();