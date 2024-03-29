(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      body: document.querySelector('[data-body]'),
      message: document.querySelector('[message-modal]'),
      closeModalMsg: document.querySelector('[message-modal-close]')
    };
    var link = document.getElementsByClassName('link');
    var mobile_link = document.getElementsByClassName('link mobile');
    var change_language = document.getElementsByClassName('change-lang');
    var message_btn = document.getElementById('message');
    var message_window = document.getElementById('message_box');
    var send_message = document.getElementById('submit');
    var clicked = 0;
    var lang=0;

    for (var i = 0; i < link.length; i++) {
      link[i].addEventListener('click', changeColor);
    }
    for (var i = 0; i < change_language.length; i++) {
      change_language[i].addEventListener('click', changeLanguage);
      change_language[i].style.setProperty('--color','rgba(130, 130, 130, 1)');
      change_language[i].style.setProperty('--coloralt', 'black');
      change_language[i].style.setProperty('--font', 'normal');
      change_language[i].style.setProperty('--fontalt', 'bold');
    }


    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalMsg.addEventListener('click', toggleMessage);
    refs.closeModalMsg.addEventListener('mousedown', checkClick);
    message_btn.addEventListener('click', toggleMessage);
    message_btn.addEventListener('mousedown', checkClick);
    submit.addEventListener('click',toggleMessage);
    message_window.addEventListener('click', function(ev) {
      ev.stopPropagation();
    }, false);
    message_window.addEventListener('mousedown', function(ev) {
      ev.stopPropagation();
    }, false);
    message_window.addEventListener('mouseup', function(ev) {
      clicked = 0;
    }, false);
    refs.closeModalMsg.addEventListener('mouseup', function(ev) {
      ev.stopPropagation();
    }, false);

    document.getElementById('about_link').addEventListener('click', gotoAbout);
    document.getElementById('home_link').addEventListener('click', gotoHome);
    document.getElementById('skills_link').addEventListener('click', gotoSkills);
    document.getElementById('contacts_link').addEventListener('click', gotoContacts);

    document.getElementById('about_link_mobile').addEventListener('click', gotoAbout);
    document.getElementById('home_link_mobile').addEventListener('click', gotoHome);
    document.getElementById('skills_link_mobile').addEventListener('click', gotoSkillsMobile);
    document.getElementById('contacts_link_mobile').addEventListener('click', gotoContacts);

    refs.message.addEventListener('click', toggleMessage);
    refs.message.addEventListener('mousedown', checkClick);
    
    function getCookie(name) {
      let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function checkClick() {
      clicked = 1;
    }
    function toggleMessage() {
      if (clicked == 1) {
        refs.message.classList.toggle('is-hidden');
        clicked = 0;
      }
    }
    function gotoAbout() {
      document.getElementById('about').scrollIntoView({block: 'center'})
    }
    function gotoHome() {
      document.getElementById('home').scrollIntoView({block: 'center'})
    }
    function gotoSkills() {
      document.getElementById('skills').scrollIntoView({block: 'center'})
    }
    function gotoSkillsMobile() {
      document.getElementById('skills_mobile').scrollIntoView({block: 'center'})
    }
    function gotoContacts() {
      document.getElementById('contacts').scrollIntoView({block: 'center'})
    }
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      if (refs.body.style.getPropertyValue('overflow') == 'hidden')
      {
        refs.body.style.overflow = "auto";
        for (var i = 0; i < mobile_link.length; i++)
        {
          mobile_link[i].style.opacity = 0;
          mobile_link[i].style.visibility = "hidden";
        }
        change_language[1].style.opacity = 0;
      }
      else {
        refs.body.style.overflow = "hidden";
        let start = Date.now();
        var element = 0;
        var opacity = 0;
        let timer = setInterval(function() {
          let timePassed = Date.now() - start;
          if(timePassed >= 500)
          {
            clearInterval(timer);
            return;
          }
          if (element == 6)
          {
            clearInterval(timer);
            return;
          }
          if (element == 5)
          {
            change_language[1].style.opacity = opacity;
            if (opacity >= 1) {
              opacity = 0;
              element = 0;
              clearInterval(timer);
              return;
            }
            opacity= opacity + 0.05;
          }
          else {
            mobile_link[element].style.visibility = "visible";
            mobile_link[element].style.opacity = opacity;
            if (opacity >= 1.0) {
              element++;
              opacity = 0;
            }
            else {
              opacity = opacity + 0.05;
            }
          }
        }, 1)
      }
    }
    function changeColor() {
        for (var i = 0; i < link.length; i++)
        {
          link[i].style.color = "rgba(130, 130, 130, 1)";
        }
        this.style.color = "black";
        if (this.className == "link mobile") {
          toggleModal();
        }
    }
    function changeLanguage() {
      for (var i = 0; i < change_language.length; i++) {
        if (lang == 0) {
          change_language[i].style.setProperty('--color', 'black');
          change_language[i].style.setProperty('--coloralt', 'rgba(130, 130, 130, 1)');
          change_language[i].style.setProperty('--font', 'bold');
          change_language[i].style.setProperty('--fontalt', 'normal');
        }
        else {
          change_language[i].style.setProperty('--color','rgba(130, 130, 130, 1)');
          change_language[i].style.setProperty('--coloralt', 'black');
          change_language[i].style.setProperty('--font', 'normal');
          change_language[i].style.setProperty('--fontalt', 'bold');
        }
      }
      if (lang == 0) {
        document.getElementById('home_link').innerHTML = "Главная";
        document.getElementById('about_link').innerHTML = "Обо мне";
        document.getElementById('skills_link').innerHTML = "Умения";
        document.getElementById('portfolio_link').innerHTML = "Портфолио";
        document.getElementById('contacts_link').innerHTML = "Контакты";
        document.getElementById('home').innerHTML = "Денис<br />Новик";
        document.getElementById('about_first').innerHTML = "UX | UI дизайнер";
        document.getElementById('about_second').innerHTML = "24 года, Минск";
        document.getElementById('about_title').innerHTML = "Обо мне";
        document.getElementById('first_p').innerHTML = "Привет, я Денис - UX | UI дизайнер с Минска. Я занимаюсь дизайном и всем, что с ним связано.";
        document.getElementById('second_p').innerHTML = "Я учусь на курсах \"Веб и мобильный дизайн интерфейсов\" в IT-Academy.";
        document.getElementById('third_p').innerHTML = "Готов реализовать отличные проекты с замечательными людьми.";
        document.getElementById('skills-title').innerHTML = "Умения";
        document.getElementById('skills').innerHTML = "Я работаю с такими программами:";
        document.getElementById('contacts').innerHTML = "Контакты";
        document.getElementById('contacts-label').innerHTML = "Хочешь узнать больше или просто пообщаться?<br />Добро пожаловать!";
        document.getElementById('footer_container').innerHTML = "Оцени меня на<br />LinkedIn, Instagram, Behance, Dribble";
        document.getElementById('message').innerHTML = "Написать";
        document.getElementById('about_link_mobile').innerHTML = "Обо мне";
        document.getElementById('home_link_mobile').innerHTML = "Главная";
        document.getElementById('skills_link_mobile').innerHTML = "Умения";
        document.getElementById('contacts_link_mobile').innerHTML = "Контакты";
        document.getElementById('portfolio_link_mobile').innerHTML = "Портфолио";
        document.getElementById('submit').innerHTML = "Отправить";
        document.getElementById('message_area').placeholder = "Ваше сообщение";
        lang = 1;
      }
      else {
        document.getElementById('home_link').innerHTML = "Home";
        document.getElementById('about_link').innerHTML = "About";
        document.getElementById('skills_link').innerHTML = "Skills";
        document.getElementById('portfolio_link').innerHTML = "Portfolio";
        document.getElementById('contacts_link').innerHTML = "Contacts";
        document.getElementById('home').innerHTML = "Denis<br />Novik";
        document.getElementById('about_first').innerHTML = "UX | UI designer";
        document.getElementById('about_second').innerHTML = "24 years old, Minsk";
        document.getElementById('about_title').innerHTML = "About";
        document.getElementById('first_p').innerHTML = "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.";
        document.getElementById('second_p').innerHTML = "I'm studying at courses \"Web and mobile design interfaces\" in IT-Academy.";
        document.getElementById('third_p').innerHTML = "Ready to implement excellent projects with wonderful people.";
        document.getElementById('skills-title').innerHTML = "Skills";
        document.getElementById('skills').innerHTML = "I work in such programs as";
        document.getElementById('contacts').innerHTML = "Contacts";
        document.getElementById('contacts-label').innerHTML = "Want to know more or just chat?<br />You are welcome!";
        document.getElementById('footer_container').innerHTML = "Like me on<br />LinkedIn, Instagram, Behance, Dribble";
        document.getElementById('message').innerHTML = "Send message";
        document.getElementById('about_link_mobile').innerHTML = "About";
        document.getElementById('home_link_mobile').innerHTML = "Home";
        document.getElementById('skills_link_mobile').innerHTML = "Skills";
        document.getElementById('contacts_link_mobile').innerHTML = "Contacts";
        document.getElementById('portfolio_link_mobile').innerHTML = "Portfolio";
        document.getElementById('submit').innerHTML = "Send";
        document.getElementById('message_area').placeholder = "Your message";
        lang = 0;
      }
    }
  })();