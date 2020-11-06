class ProfileUI {
    constructor() {
        // html sayfasındaki profil bilgisinin geleceği div
        this.profileContainer = document.querySelector("#profileContainer");
        // html sayfasındaki hata bilgisinin geleceği div
        this.error = document.querySelector("#profileError");
    }

    showProfile(profile) {
        this.profileContainer.innerHTML = `
            <div class="container">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <a href="#">
                                <img src="https://i.picsum.photos/id/798/200/200.jpg?hmac=Y-GVgT90HQZA0AOyRx9gcdj-14IrW6-zz81X6pMlE0k">
                            </a>
                        </div>
                        <div class="col-md-9">
                            <h4>Contact</h4>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    Name : ${profile.name}
                                </li>
                                <li class="list-group-item">
                                    Username : ${profile.username}
                                </li>
                                <li class="list-group-item">
                                    E-Mail : ${profile.email}
                                </li>
                                <li class="list-group-item">
                                    Phone : ${profile.phone}
                                </li>
                                <li class="list-group-item">
                                    Website : <a href="${profile.website}">${profile.website}</a>
                                </li>
                            </ul>
                            <h4 class="mt-5">TODO</h4>
                            <ul id="todo" class="list-group">

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    showError(error) {
        this.error.innerHTML = `${error} is not defined`;
    }

    showTodo(todo) {
        let html = "";

        todo.forEach(element => {
            if (element.completed) {
                html += `
                    <li class="list-group-item bg-success">
                        ${element.title}
                    </li>
                `;
            } else {
                html += `
                    <li class="list-group-item bg-secondary">
                        ${element.title}
                    </li>
                `;
            }
        this.profileContainer.querySelector("#todo").innerHTML = html;
        });
    }

    clear() {
        this.profileContainer.innerHTML = "";
        this.error.innerHTML = "";
    }
}