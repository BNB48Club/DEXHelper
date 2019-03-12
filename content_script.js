function click() {
    address = address.split(",");
    var btn = document.getElementsByClassName("ant-btn sc-10039vq-3 dtOOdd sc-1thz0nh-0 cJdTQC");
    for (i = 0; i < 20; i++) { 
        btn[0].click();
    };

    [...document.querySelectorAll('.form-item input')].forEach( (input,index)  => {
        input.value = address[index]; 
        // console.log(address[index]);
        var event = new Event('input', { bubbles: true });
        event.simulated = true;
        let tracker = input._valueTracker;
        if (tracker) {
             tracker.setValue('whatever');
        }
        input.dispatchEvent(event);
    })



}


click();