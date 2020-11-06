const profile = new Profile(); 
const ui = new ProfileUI();
const searchProfile = document.querySelector("#searchProfile");
searchProfile.addEventListener("keyup", (event) => {
    ui.clear();
    let text = event.target.value;

    if (text !== "") {
        profile.getProfile(text).then(res => {
            if (res.profile.length === 0) {
                ui.showError(text); // hata mesajı doğruyu bulana kadar çalışır, doğruyu bulduktan sonra sonlanır
            } else {
                ui.showProfile(res.profile[0]);
                ui.showTodo(res.todo);
            }
        }).catch(rej => {
            ui.showError(text);
        })
    }
})