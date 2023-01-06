let current_data;

function setValueByClass(t_class, t_value){
    dataTag = document.getElementsByClassName(t_class);
    for(let i = 0 ; i < dataTag.length ; i++) {
        dataTag[i].innerHTML=t_value;
    };
}

const modes = {
    text_mode : function (data){
        setValueByClass("data", data.text);
    },
    donation_mode: function (data){
        setValueByClass("d-amount", data.amount);
        setValueByClass("d-name", data.name);
        setValueByClass("d-year", data.year);
        document.getElementById("d-img").setAttribute("src", data.img);
    },
    video_mode: function (data){
        f_video = document.getElementById("f-video")
        console.log("Setting url to "+data.url)
        if(current_data == undefined || current_data.url != data.url)f_video.setAttribute("src", data.url);
        // f_video.requestFullscreen();
    },
    multi_text_mode: function (data){
        if(JSON.stringify(l_text) != JSON.stringify(data.text)){
            l_text = data.text;
            ci=0;
            if(!stopped){
                slowlyDelete(document.getElementById("writer"));
                stopped=true;
            }
        }
    },
    command_mode: function (data){
        eval(data.command);
    },
    multi_donation_mode: function(data){
        for(let i=0; i<data.data.length; i++){
            console.log(20000*(i+1));
            setTimeout(this.donation_mode, 20000*(i+1), data.data[i]);
        }
    }
}

function set_mode(data){
    if(current_data != undefined && current_data == data)return 0;

    // Switch Modes
    if(current_data == undefined || current_data.mode != data.mode){
        sects = document.getElementsByTagName("section");
        for(let i=0; i<sects.length; i++)sects[i].classList.add("hidden");
        document.getElementById(data.mode).classList.remove("hidden");
    }
    // Set Values
    modes[data.mode](data);
    current_data = data;
}