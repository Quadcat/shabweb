/* eslint-disable */
$(document).ready(function () {
  var scrollTop = $('.scrollTop');
  var mobilewidth = $(window).width();
  var scrollPosition = $(window).scrollTop();
  if (scrollPosition > 100) {

    $('.header').addClass('newheader');
    $('.newheader img').css('cursor', 'pointer');
    $('.scroll_bottomsection').css('display', 'none');
    $('.scrollTop,.scrollBottom').css('bottom', '130px');
    $(scrollTop).css('display', 'block');

    // $ ('#myCarousel').bind ('slid.bs.carousel', function (e) {
    //   $ ('.links .headerOption').css ('color', '#fff');
    //   $ ('.links .loginbtn_text').css ('color', '#fff');
    //   $ ('.links .loginbtn_text').css ('border-color', '#fff');
    //   $ ('.userDetail .userName').css ('color', '#fff');
    // });
  } else {
    $('.newheader img').css('cursor', 'default');
    $('.header').removeClass('newheader');
    $(scrollTop).css('display', 'none');
    $('.scrollTop,.scrollBottom').css('bottom', '50px');
    $('.scroll_bottomsection').css('display', 'block');
    // $ ('#myCarousel').on ('slid.bs.carousel', function (e) {
    //   var carousel_screen = document.querySelectorAll ('.item.active')[0].id;
    //   if (carousel_screen === 'card-screen') {
    //     $ ('.links .headerOption').css ('color', '#000');
    //     $ ('.links .loginbtn_text').css ('color', '#000');
    //     $ ('.links .loginbtn_text').css ('border-color', '#000');
    //     $ ('.userDetail .userName').css ('color', '#000');
    //     $ ('.carousel-indicators #carousel_id_3').css({'background': '#fff !important', 'border-color': '#000'});

    //   }
    //   if (carousel_screen === 'main-screen') {
    //     $ ('.links .headerOption').css ('color', '#fff');
    //     $ ('.links .loginbtn_text').css ('color', '#fff');
    //     $ ('.links .loginbtn_text').css ('border-color', '#fff');
    //     $ ('.userDetail .userName').css ('color', '#fff');
    //     $ ('.carousel-indicators #carousel_id_1').css({'background': '#000 !important', 'border-color': '#fff'});
    //     $ ('.carousel-indicators #carousel_id_3').css({'background': '#000 !important', 'border-color': '#fff'});
    //   }
    //   if (carousel_screen === 'count-me-in-screen') {
    //     $ ('.links .headerOption').css ('color', '#000');
    //     $ ('.links .loginbtn_text').css ('color', '#000');
    //     $ ('.links .loginbtn_text').css ('border-color', '#000');
    //     $ ('.userDetail .userName').css ('color', '#000');
    //     $ ('.carousel-indicators #carousel_id_1').css({'background': '#fff !important', 'border-color': '#000'});
    //   }
    // });
  }
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    var width = $(window).width();
    if (topPos > 100) {
      $('.header').addClass('newheader');
      $('.newheader img').css('cursor', 'pointer');
      $('.scroll_bottomsection').css('display', 'none');
      $('.scrollTop,.scrollBottom').css('bottom', '130px');
      // $ ('.links .headerOption').css ('color', '#fff');
      $(scrollTop).css('display', 'block');
      // if(width > 768) {
      //   $ ('.links .headerOption').css ('color', '#fff');
      //   $ ('.links .loginbtn_text').css ('color', '#fff');
      //   $ ('.links .loginbtn_text').css ('border-color', '#fff');
      // }
      // $ ('.userDetail .userName').css ('color', '#fff');
      // $ ('#myCarousel').bind ('slid.bs.carousel', function (e) {
      //   $ ('.links .headerOption').css ('color', '#fff');
      //   $ ('.links .loginbtn_text').css ('color', '#fff');
      //   $ ('.links .loginbtn_text').css ('border-color', '#fff');
      //   $ ('.userDetail .userName').css ('color', '#fff');
      // })
    }
    else {
      $('.newheader img').css('cursor', 'default');
      $('.header').removeClass('newheader');
      $(scrollTop).css('display', 'none');
      $('.scrollTop,.scrollBottom').css('bottom', '50px');
      $('.scroll_bottomsection').css('display', 'block');
      // $ ('.links .headerOption').css ('color', '#000');
      // var carousel_screen = document.querySelectorAll ('.item.active')[0].id;
      // if (carousel_screen === 'card-screen') {
      //   if(width > 768) {
      //     $ ('.links .headerOption').css ('color', '#000');
      //     $ ('.links .loginbtn_text').css ('color', '#000');
      //     $ ('.links .loginbtn_text').css ('border-color', '#000');
      //   }
      //   $ ('.userDetail .userName').css ('color', '#000');
      //   $ ('.carousel-indicators #carousel_id_3').css({'background': '#fff !important', 'border-color': '#000'});

      // }
      // if (carousel_screen === 'main-screen') {
      //   $ ('.links .headerOption').css ('color', '#fff');
      //   $ ('.links .loginbtn_text').css ('color', '#fff');
      //   $ ('.links .loginbtn_text').css ('border-color', '#fff');
      //   $ ('.userDetail .userName').css ('color', '#fff');
      //   $ ('.carousel-indicators #carousel_id_1').css({'background': '#000 !important', 'border-color': '#fff'});
      //   $ ('.carousel-indicators #carousel_id_3').css({'background': '#000 !important', 'border-color': '#fff'});
      // }
      // if (carousel_screen === 'count-me-in-screen') {
      //   if(width > 768) {
      //     $ ('.links .headerOption').css ('color', '#000');
      //     $ ('.links .loginbtn_text').css ('color', '#000');
      //     $ ('.links .loginbtn_text').css ('border-color', '#000');
      //   }
      //   $ ('.userDetail .userName').css ('color', '#000');
      //   $ ('.carousel-indicators #carousel_id_1').css({'background': '#fff !important', 'border-color': '#000'});
      // }
      //     $ ('#myCarousel').on ('slid.bs.carousel', function (e) {
      // var carousel_screen = document.querySelectorAll ('.item.active')[0].id;
      // if (carousel_screen === 'card-screen') {
      //   if(width > 768) {
      //     $ ('.links .headerOption').css ('color', '#000');
      //     $ ('.links .loginbtn_text').css ('color', '#000');
      //     $ ('.links .loginbtn_text').css ('border-color', '#000');
      //   }
      // $ ('.userDetail .userName').css ('color', '#000');
      // $ ('.carousel-indicators #carousel_id_3').css({'background': '#fff !important', 'border-color': '#000'});
      // }
      // if (carousel_screen === 'main-screen') {
      //   $ ('.links .headerOption').css ('color', '#fff');
      //   $ ('.links .loginbtn_text').css ('color', '#fff');
      //   $ ('.links .loginbtn_text').css ('border-color', '#fff');
      //   $ ('.userDetail .userName').css ('color', '#fff');
      //   $ ('.carousel-indicators #carousel_id_1').css({'background': '#000 !important', 'border-color': '#fff'});
      //   $ ('.carousel-indicators #carousel_id_3').css({'background': '#000 !important', 'border-color': '#fff'});
      // }
      // if (carousel_screen === 'count-me-in-screen') {
      //   if(width > 768) {
      //     $ ('.links .headerOption').css ('color', '#000');
      //     $ ('.links .loginbtn_text').css ('color', '#000');
      //     $ ('.links .loginbtn_text').css ('border-color', '#000');
      //   }
      //   $ ('.userDetail .userName').css ('color', '#000');
      //   $ ('.carousel-indicators #carousel_id_1').css({'background': '#fff !important', 'border-color': '#000'});
      // }
      // });
    }
  });

  $('.logoContainer img').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  if (mobilewidth < 768) {
    $('.mobilebarsbutton i').click(function () {
      $('.listinglinks').css({ 'width': '100%', 'transition': '0.5s' });
      $('body').css('overflow','hidden');
      $('.carousel-indicators li').css('opacity', '0');
    })
    $('.mobilecrossbutton img,a.headerOption,.headerLoginBtn,ul.dropdown-menu .btnLink').click(function () {
      $('.listinglinks').css({ 'width': '0px', 'transition': '0.1s' });
      $('body').css('overflow','initial');
      $('.carousel-indicators li').css('opacity', '1');
    })
  }
  $(scrollTop).click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $('.btnLinks div.dropdown').hover(
    function () {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .delay(200)
        .fadeIn(500);
    },
    function () {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .delay(500)
        .fadeOut(500);
    }
  );

  $('div.linkslist div.dropdown').hover(
    function () {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .delay(200)
        .fadeIn(500);
    },
    function () {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .delay(500)
        .fadeOut(500);
    }
  );

  $('div.userImageContainer')
    .mouseenter(function (e) {
      $('div.userDetail')
        .find('.userDetail-menu')
        .stop(true, true)
        .delay(200)
        .fadeIn(500);
    })
    .mouseleave(function (e) {
      const parent = document.getElementById('userDetail-menuList');
      if (!parent.contains(e.relatedTarget)) {
        $('div.userDetail')
          .find('.userDetail-menu')
          .stop(true, true)
          .delay(200)
          .fadeOut(500);
      }
    });
  $('ul.userDetail-menu').mouseleave(function (e) {
    $('div.userDetail')
      .find('.userDetail-menu')
      .stop(true, true)
      .delay(200)
      .fadeOut(500);
  });
  $('div.userImageContainer').on('touchstart', function (e) {
    const parent = document.getElementById('userDetail-menuList');
    const parentDisplay = parent ? $(parent).css('display') : 'none';
    if (parentDisplay === 'none') {
      $('div.userDetail')
        .find('.userDetail-menu')
        .stop(true, true)
        .delay(200)
        .fadeIn(500);
    }
  });

  $('body').on('touchstart', function (e) {
    const parent = document.getElementById('userDetail-menuList');
    const parentDisplay = parent ? $(parent).css('display') : 'none';
    if (parentDisplay === 'block') {
      $('div.userDetail')
        .find('.userDetail-menu')
        .stop(true, true)
        .delay(200)
        .fadeOut(500);
    }
  });

  $(
    '.header-mobile .howtowork,.links .howtowork,a.scroll_bottomsection'
  ).on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 60,
        },
        800,
        function () {
          // window.location.hash = hash;
        }
      );
    }
  });
  if (window.location.hash === '#Howitworks') {
    var hash = window.location.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 60,
      },
      100,
      function () {
        // window.location.hash = hash;
      }
    );
  }

  function showModal() {
    $('#myModal').modal();
  }

  $('.watchVideo').on('click', function (event) {
    $('#homePage').css('overflow', 'hidden');
    var video = document.getElementById('fullScreenVideo');
    video.currentTime = 0;
    video.play();
    var modal = document.getElementById('videoModal');
    modal.style.display = 'block';
  });
  $('.videoCross').on('click', function (event) {
    $('#homePage').css('overflow', 'auto');
    var video = document.getElementById('fullScreenVideo');
    video.currentTime = 0;
    video.pause();
    var modal = document.getElementById('videoModal');
    modal.style.display = 'none';
  });

  function forIECustomEventHandler() {
    if (typeof window.CustomEvent === 'function') return false;
    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }

  // <-----------------------------------------IFRAME CREATOR START --------------------------------------->

  function IframeCreator(link, id) {
    var link = window.location.origin + link;
    var iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.id = id;
    iframe.setAttribute('src', link);
    document.getElementById('homePage').appendChild(iframe);
    $('#homePage').css('overflow', 'hidden');
    //document.getElementById ('loader').style.display = 'none';
  }
  // <----------------------------------------- IFRAME CREATOR END --------------------------------------->

  // <----------------------------------------- FOR LOGIN START --------------------------------------->

  $('.headerLoginBtn').on('click', function (event) {
    document.getElementById('loader').style.display = 'block';
    IframeCreator('/login', 'loginIframe');
  });

  window.document.addEventListener(
    'myLoginCustomEvent',
    handleLoginEvent,
    false
  );
  function handleLoginEvent(e) {
    if (e.detail.close) {
      $('#loginIframe').remove();
      $('#homePage').css('overflow', 'auto');
    } else {
      if (e.detail.useFor === 'signUp') {
        $('#loginIframe').remove();
        document.getElementById('loader').style.display = 'block';
        IframeCreator('/register/user', 'userRegisterIframe');
      } else {
        //$ ('#loginIframe').remove ();
        window.location = e.detail.url;
        document.getElementById('loader').style.display = 'block';
      }
    }
  }
  //<----------------------------------------- FOR LOGIN END --------------------------------------->

  //<----------------------------------------- FOR MEMBER SIGN UP START --------------------------------------->

  $('.memberBtn').on('click', function (event) {
    document.getElementById('loader').style.display = 'block';
    IframeCreator('/register/user', 'userRegisterIframe');
  });

  $('.countmeinBtn').on('click', function (event) {
    document.getElementById('loader').style.display = 'block';
    IframeCreator('/register/countMeIn/user', 'userRegisterIframe');
  });


  window.document.addEventListener(
    'memRegCustomEvent',
    handleMemRegEvent,
    false
  );
  function handleMemRegEvent(e) {
    if (e.detail.close) {
      $('#userRegisterIframe').remove();
      $('#homePage').css('overflow', 'auto');
    } else {
      if (e.detail.useFor === 'login') {
        $('#userRegisterIframe').remove();
        document.getElementById('loader').style.display = 'block';
        IframeCreator('/login', 'loginIframe');
      } else {
        window.location = e.detail.url;
        document.getElementById('loader').style.display = 'block';
      }
    }
  }
  // <-----------------------------------------FOR MEMBER SIGN UP END --------------------------------------->

  // <-----------------------------------------FOR NPO/HCP SUBMIT EMAIL HANDLER START --------------------------------------->

  function submitEmailHandler(userType) {
    $('#homePage').css('overflow', 'hidden');
    if (userType === 'ORG') {
      // $ ('div.nonProfitContentBox').css ('height', '500px');
      $('h3.headerText').html('Sign up your nonprofit');
      $('p.subHeader').html(
        'Fill out the form below to register your nonprofit.'
      );
      $('label.OrgName').html('Organization Name*');
      $('input[name ="orgName"]').attr(
        'placeholder',
        'Please enter your organization name.'
      );
    }
    if (userType === 'SP') {
      // $ ('div.nonProfitContentBox').css ('height', '580px');
      $('h3.headerText').html(
        'Sign up to register as a hlthe healthcare provider'
      );
      $('p.subHeader').html(
        'Fill out the form below to register to receive payments through hlthe.'
      );
      $('label.OrgName').html('Name of Provider* ');
      $('input[name=orgName]').attr(
        'placeholder',
        'Please enter your healthcare provider name.'
      );
    }
    modal.style.display = 'block';
    $('.sendEmailButton').on('click', function (event) {
      getApiUrl(userType);
    });
  }
  // <-----------------------------------------FOR NPO/HCP SUBMIT EMAIL HANDLER END --------------------------------------->

  //<----------------------------------------- FOR NPO/HCP GET API URL START --------------------------------------->

  function getApiUrl(userType) {
    $.ajax({
      url: '/apiBaseUrl',
      type: 'GET',
      success: function (apiBaseUrlResponse) {
        sendEmail(userType, apiBaseUrlResponse);
      },
      error: function (error) {
        throw error;
      },
    });
  }
  //<----------------------------------------- FOR NPO/HCP GET API URL END --------------------------------------->

  // <-----------------------------------------FOR NPO/HCP SEND EMAIL START --------------------------------------->

  var sendEmail = function (userType, apiBaseUrl) {
    var element = document.getElementById('email-input');
    var OrgName = document.getElementById('name-input').value;
    var contactName = document.getElementById('contact-input').value;
    var value = element.value;
    var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var apiUrl = apiBaseUrl + '/v1/org/email/prereg';
    var payload = {};
    if (!value || !emailReg.test(value)) {
      $('#email-input').css('border-color', 'red');
      $('#emailIdError').css('display', 'inline');
      document.getElementById('emailIdError').innerHTML = !value
        ? 'Email address is required.'
        : 'Email address is invalid';
    }
    if (!OrgName) {
      $('#name-input').css('border-color', 'red');
      $('#orgNameError').css('display', 'inline');
      document.getElementById('orgNameError').innerHTML = userType === 'ORG'
        ? 'Name of organization is required.'
        : 'Name of provider is required.';
    }
    if (!contactName) {
      $('#contact-input').css('border-color', 'red');
      $('#contactError').css('display', 'inline');
      document.getElementById('contactError').innerHTML =
        'Contact Name is required.';
    }
    if (!value || !emailReg.test(value) || !contactName || !OrgName) {
      // var msg = !value
      //   ? 'Please fill the form'
      //   : 'Email address is invalid';
      // document.getElementById ('emailError').innerHTML = msg;
      return false;
    } else {
      document.getElementById('emailError').innerHTML = '';
    }
    document.getElementById('loader').style.display = 'block';

    if (userType === 'SP') {
      payload = {
        email: value,
        orgtype: 'SP',
        org_name: OrgName,
        contact_name: contactName,
      };
    } else {
      payload = {
        email: value,
        org_name: OrgName,
        contact_name: contactName,
      };
    }
    document.getElementById('emailError').innerHTML = '';
    $.ajax({
      type: 'POST',
      url: apiUrl,
      data: payload,
      success: function (response) {
        if (response.code === 0) {
          document.getElementById('submitEmailForm').style.display = 'none';
          document.getElementById('submitEmailSuccess').style.display = 'flex';
          document.getElementById('loader').style.display = 'none';
          //window.location.href = '/submitemailsuccess';
        }
        if (
          response.code === 1854 &&
          response.error === 'User Already present'
        ) {
          document.getElementById('loader').style.display = 'none';
          document.getElementById('emailError').innerHTML =
            'The email you entered is already registered in our platform.';
        } else if (response.code !== 0) {
          document.getElementById('loader').style.display = 'none';
          document.getElementById('emailError').innerHTML =
            'Error in Submitting Email. Please try again.';
        }
      },
      error: function (error) {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('emailError').innerHTML =
          'Error in Submitting Email. Please try again.';
        throw error;
      },
    });
  };
  //<----------------------------------------- FOR NPO/HCP SEND EMAIL END --------------------------------------->

  // <-----------------------------------------FOR NPO/HCP SUBMIT EMAIL ERROR HANDLER START --------------------------------------->

  $('input#email-input').on('input', function (event) {
    document.getElementById('emailError').innerHTML = '';
  });
  //<----------------------------------------- FOR NPO/HCP SUBMIT EMAIL ERROR HANDLER START --------------------------------------->

  //<----------------------------------------- FOR NPO/HCP SUBMIT EMAIL LOGIN HANDLER START --------------------------------------->

  $('.modalLoginButton').on('click', function (event) {
    modal.style.display = 'none';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('email-input').value = '';
    document.getElementById('name-input').value = '';
    document.getElementById('contact-input').value = '';
    document.getElementById('loader').style.display = 'block';
    IframeCreator('/login', 'loginIframe');
    $('#name-input').css('border-color', '#dddddd');
    $('#orgNameError').css('display', 'none');
    $('#email-input').css('border-color', '#dddddd');
    $('#emailIdError').css('display', 'none');
    $('#contact-input').css('border-color', '#dddddd');
    $('#contactError').css('display', 'none');
  });
  //<----------------------------------------- FOR NPO/HCP SUBMIT EMAIL LOGIN HANDLER END --------------------------------------->

  //<----------------------------------------- FOR NPO/HCP SUCCESS MODAL CLOSE START --------------------------------------->

  function closeSuccessModal() {
    modal.style.display = 'none';
    $('#homePage').css('overflow', 'auto');
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('email-input').value = '';
    document.getElementById('name-input').value = '';
    document.getElementById('contact-input').value = '';
    document.getElementById('submitEmailForm').style.display = 'block';
    document.getElementById('submitEmailSuccess').style.display = 'none';
    $('#name-input').css('border-color', '#dddddd');
    $('#orgNameError').css('display', 'none');
    $('#email-input').css('border-color', '#dddddd');
    $('#emailIdError').css('display', 'none');
    $('#contact-input').css('border-color', '#dddddd');
    $('#contactError').css('display', 'none');
  }
  //<----------------------------------------- FOR NPO/HCP SUCCESS MODAL CLOSE END --------------------------------------->

  // <-----------------------------------------FOR NPO/HCP  MODAL CLOSE START --------------------------------------->

  function closeModal() {
    modal.style.display = 'none';
    $('#homePage').css('overflow', 'auto');
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('email-input').value = '';
    document.getElementById('name-input').value = '';
    document.getElementById('contact-input').value = '';
    $('#name-input').css('border-color', '#dddddd');
    $('#orgNameError').css('display', 'none');
    $('#email-input').css('border-color', '#dddddd');
    $('#emailIdError').css('display', 'none');
    $('#contact-input').css('border-color', '#dddddd');
    $('#contactError').css('display', 'none');
  }
  //<----------------------------------------- FOR NPO/HCP  MODAL CLOSE END --------------------------------------->

  //<----------------------------------------- FOR NPO/HCP SUBMIT  MODAL ON ENTER  START --------------------------------------->

  $('#form1').on('submit', function (event) {
    var text = $('h3.headerText').text();
    if (text === 'Sign up your nonprofit') {
      getApiUrl('ORG');
      event.preventDefault();
    } else if (text === 'Sign up to register as a hlthe healthcare provider') {
      getApiUrl('SP');
      event.preventDefault();
    }
  });
  //<----------------------------------------- FOR NPO/HCP SUBMIT  MODAL ON ENTER  END --------------------------------------->

  // <-----------------------------------------FOR NPO SUBMIT EMAIL UP START --------------------------------------->

  var modal = document.getElementById('submitEmailModal');
  var SubmitBtn = document.getElementById('submitNPOEmailBtn');
  var SubmitBtn2 = document.getElementById('submitNPOEmailBtn2');
  var SubmitBtn3 = document.getElementById('submitNPOEmailBtn3');
  var closeNPOBtn = document.getElementById('closeSubmitEmailModal');
  var closeNPOSuccessBtn = document.getElementById('closeSuccessEmailModal');
  document.getElementById('submitEmailSuccess').style.display = 'none';
  document.getElementById('loader').style.display = 'none';
  if (SubmitBtn) {
    SubmitBtn.onclick = function () {
      submitEmailHandler('ORG');
    };
  }
  if (SubmitBtn2) {
    SubmitBtn2.onclick = function () {
      submitEmailHandler('ORG');
    };
  }
  if (SubmitBtn3) {
    SubmitBtn3.onclick = function () {
      submitEmailHandler('ORG');
    };
  }
  if (closeNPOBtn) {
    closeNPOBtn.onclick = function () {
      closeModal();
    };
  }
  if (closeNPOSuccessBtn) {
    closeNPOSuccessBtn.onclick = function () {
      closeSuccessModal();
    };
  }
  //<----------------------------------------- FOR NPO SUBMIT  MODAL ON ENTER  END --------------------------------------->

  // <-----------------------------------------FOR HCP SUBMIT EMAIL UP START --------------------------------------->

  var modal = document.getElementById('submitEmailModal');
  var SubmitHCPBtn = document.getElementById('submitHCPEmailBtn');
  var SubmitHCPBtn2 = document.getElementById('submitHCPEmailBtn2');
  var closeHCPBtn = document.getElementById('closeSubmitEmailModal');
  var closeHCPSuccessBtn = document.getElementById('closeSuccessEmailModal');
  document.getElementById('submitEmailSuccess').style.display = 'none';
  document.getElementById('loader').style.display = 'none';
  if (SubmitHCPBtn) {
    SubmitHCPBtn.onclick = function () {
      submitEmailHandler('SP');
    };
  }
  if (SubmitHCPBtn2) {
    SubmitHCPBtn2.onclick = function () {
      submitEmailHandler('SP');
    };
  }
  if (closeHCPBtn) {
    closeHCPBtn.onclick = function () {
      closeModal();
    };
  }
  if (closeHCPSuccessBtn) {
    closeHCPSuccessBtn.onclick = function () {
      closeSuccessModal();
    };
  }
  //<----------------------------------------- FOR HCP SUBMIT EMAIL UP END --------------------------------------->

  //<----------------------------------------- FOR INVITED USER SIGN UP / LOGIN  START --------------------------------------->

  var invitedUserData = JSON.parse(
    window.localStorage.getItem('userDetails')
  );
  if (invitedUserData) {
    if (invitedUserData.redirect_page === 'LOGIN') {
      $.removeCookie('Authorization');
      document.getElementById('loader').style.display = 'block';
      IframeCreator(window.localStorage.getItem('url'), 'loginIframe');
    } else {
      $.removeCookie('Authorization');
      document.getElementById('loader').style.display = 'block';
      IframeCreator(window.localStorage.getItem('url'), 'userRegisterIframe');
    }
  }
  //<----------------------------------------- FOR INVITED USER SIGN UP / LOGIN  END --------------------------------------->

  // <-----------------------------------------FOR LOADER TO STOP START --------------------------------------->

  window.document.addEventListener('stopLoader', stopLoader, false);
  function stopLoader(e) {
    document.getElementById('loader').style.display = 'none';
  }
  //<----------------------------------------- FOR LOADER TO STOP END --------------------------------------->

  var value = $.cookie('Authorization');
  var role = '';
  if (value !== undefined) {
    $.ajax({
      url: '/916867d9-821a-4899-84db-e065fdfcc340',
      type: 'GET',
      success: function (env) {
        var apiBaseUrl = env.apiBaseUrl;
        var mediaFilesBaseUrlV2 = env.mediaFilesBaseUrlV2;
        var MediaFilesS3BucketName = env.mediaFilesS3BucketName;
        var orgId;
        $.ajax({
          url: apiBaseUrl + '/v1/user/roles/get',
          type: 'GET',
          headers: {
            Authorization: value,
            pragma: 'no-cache',
            'cache-control': 'no-cache',
          },
          success: function (response) {
            role = response.body[0].type;
            if (role === 'ORG') {
              $.ajax({
                url: apiBaseUrl + '/v1/org/token',
                type: 'GET',
                headers: {
                  Authorization: value,
                  pragma: 'no-cache',
                  'cache-control': 'no-cache',
                },
                success: function (response) {
                  orgId = response.body.orgList[0].id;
                  if (
                    orgId !== undefined &&
                    response.body.orgList[0].is_verified === 1
                  ) {
                    $('.createFundraiser').attr(
                      'href',
                      'organization/fundraisers/manage/' +
                      orgId +
                      'createfundraiser=true'
                    );
                    $('.dashboardLink').attr(
                      'href',
                      '/organization/fundraisers/manage/' + orgId
                    );
                  } else if (
                    orgId !== undefined &&
                    response.body.orgList[0].is_verified === 0
                  ) {
                    $('.dashboardLink').attr('href', '/dashboard');
                  }
                },
                error: function (error) {
                  $('.createFundraiser').attr('href', '/login');
                  $('.dashboardLink').attr('href', '/login');
                  throw error;
                },
              });


              $.ajax({
                url: apiBaseUrl + '/v1/org/user/get',
                type: 'GET',
                headers: {
                  Authorization: value,
                  pragma: 'no-cache',
                  'cache-control': 'no-cache',
                },
                success: function (response) {
                  if (response.code === 0) {
                    if (response.body.avatar_url) {
                      const imageRequest = JSON.stringify({
                        bucket: MediaFilesS3BucketName,
                        key: 'mediaFiles/' + response.body.avatar_url,
                        edits: {
                          resize: {
                            width: 30,
                            height: 30,
                            fit: 'contain',
                          },
                        },
                      });
                      const url = mediaFilesBaseUrlV2 + '/' + btoa(imageRequest);
                      $('.userImage').attr('src', url);
                    } else {
                      $('.userImage').attr(
                        'src',
                        './static/images/person-icon.png'
                      );
                    }
                    userName = response.body.full_name.toUpperCase ();
                    $ ('.profileImageAndName').prepend (
                      '<p class="userName">' +
                          '<a class="headerOption howtowork hidden-xs" href="/search/grants">GRANTS</a>' +
                          '<a class="headerOption howtowork hidden-xs" href="/search/fundraisers">CONTRIBUTE NOW</a>' +
                          '<a class="headerOption howtowork hidden-xs" href="/wp/media-center">MEDIA CENTER</a>' +
                          '<a class="headerOption howtowork hidden-xs" href="/#Howitworks">HOW IT WORKS</a>' +
                        userName +
                      '</p>'
                    );
                    $('.mobile-links-logout').prepend(
                      '<li><a class="headerOption_logout uName"><button>' +
                      userName +
                      '</button></a></li>'
                    );
                  }
                },
                error: function (error) {
                  throw error;
                },
              });
            }

            if (role === 'MEM') {
              $('.createFundraiser').attr(
                'href',
                'user/summary?createfundraiser=true'
              );

              $('.dashboardLink').attr('href', '/user/summary');

              $.ajax({
                url: apiBaseUrl + '/v1/user/get',
                type: 'GET',
                headers: {
                  Authorization: value,
                  pragma: 'no-cache',
                  'cache-control': 'no-cache',
                },
                success: function (response) {
                  if (response.code === 0) {
                    if (response.body.avatar_url) {
                      const imageRequest = JSON.stringify({
                        bucket: MediaFilesS3BucketName,
                        key: 'mediaFiles/' + response.body.avatar_url,
                        edits: {
                          resize: {
                            width: 30,
                            height: 30,
                            fit: 'contain',
                          },
                        },
                      });
                      const url = mediaFilesBaseUrlV2 + '/' + btoa(imageRequest);
                      $('.userImage').attr('src', url);
                    } else {
                      $('.userImage').attr(
                        'src',
                        './static/images/person-icon.png'
                      );
                    }
                    userName = response.body.full_name.toUpperCase ();
                    $ ('.profileImageAndName').prepend (
                      '<p class="userName">' +
                          '<a class="headerOption howtowork hidden-xs" href="/search/grants">GRANTS</a>' +
                          '<a class="headerOption howtowork hidden-xs" href="/search/fundraisers">CONTRIBUTE NOW</a>' +
                          '<a class="headerOption howtowork hidden-xs" href="/wp/media-center">MEDIA CENTER</a>' +
                          '<a class="headerOption howtowork hidden-xs" href="/#Howitworks">HOW IT WORKS</a>' +
                        userName +
                      '</p>'
                    );
                    $('.mobile-links-logout').prepend(
                      '<li><a class="headerOption_logout uName"><button>' +
                      userName +
                      '</button></a></li>'
                    );
                  }
                },
                error: function (error) {
                  throw error;
                },
              });
            }

            if (role === 'SP') {
              var spId;
              $('.createFundraiser').removeAttr('href');
              $('a.createFundraiser button').on('click', function () {
                $('.createFundraiser button').attr('onclick', showModal());
              });

              $.ajax({
                url: apiBaseUrl + '/v1/sp/token',
                type: 'GET',
                headers: {
                  Authorization: value,
                  pragma: 'no-cache',
                  'cache-control': 'no-cache',
                },
                success: function (response) {
                  spId = response.body.spList[0].id;
                  if (
                    spId !== undefined &&
                    response.body.spList[0].is_verified === 1
                  ) {
                    if (response.body.spList[0].is_profile_setup === 1) {
                      $('.dashboardLink').attr(
                        'href',
                        '/provider/payments/' + spId
                      );
                    } else if (response.body.spList[0].is_profile_setup === 0) {
                      $('.dashboardLink').attr(
                        'href',
                        'provider/setup/' + spId
                      );
                    }
                  } else if (
                    spId !== undefined &&
                    response.body.spList[0].is_verified === 0
                  ) {
                    $('.dashboardLink').attr('href', '/provider/dashboard');
                  }
                },
                error: function (error) {
                  $('.dashboardLink').attr('href', '/login');
                  throw error;
                },
              });

              $.ajax({
                url: apiBaseUrl + '/v1/org/user/get',
                type: 'GET',
                headers: {
                  Authorization: value,
                  pragma: 'no-cache',
                  'cache-control': 'no-cache',
                },
                success: function (response) {
                  if (response.code === 0) {
                    if (response.body.avatar_url) {
                      const imageRequest = JSON.stringify({
                        bucket: MediaFilesS3BucketName,
                        key: 'mediaFiles/' + response.body.avatar_url,
                        edits: {
                          resize: {
                            width: 30,
                            height: 30,
                            fit: 'contain',
                          },
                        },
                      });
                      const url = mediaFilesBaseUrlV2 + '/' + btoa(imageRequest);
                      $('.userImage').attr('src', url);
                    } else {
                      $('.userImage').attr(
                        'src',
                        './static/images/person-icon.png'
                      );
                    }
                    userName = response.body.full_name.toUpperCase ();
                    $ ('.profileImageAndName').prepend (
                      '<p class="userName">' +
                          '<a class="headerOption howtowork hidden-xs" href="/search/grants">GRANTS</a>' +
                          '<a class="headerOption howtowork hidden-xs" href="/search/fundraisers">CONTRIBUTE NOW</a>' +
                          '<a class="headerOption howtowork hidden-xs" href="/wp/media-center">MEDIA CENTER</a>' +
                          '<a class="headerOption howtowork hidden-xs" href="/#Howitworks">HOW IT WORKS</a>' +
                        userName +
                      '</p>'
                    );
                    $('.mobile-links-logout').prepend(
                      '<li><a class="headerOption_logout uName"><button>' +
                      userName +
                      '</button></a></li>'
                    );
                  }
                },
                error: function (error) {
                  throw error;
                },
              });
            }
          },
          error: function (error) {
            $('.createFundraiser').attr('href', 'login');
            throw error;
          },
        });
      },
      error: function (error) {
        throw error;
      },
    });
  }

  $('#name-input').keyup(function () {
    $('#name-input').css('border-color', '#dddddd');
    $('#orgNameError').css('display', 'none');
  });
  $('#email-input').keyup(function () {
    $('#email-input').css('border-color', '#dddddd');
    $('#emailIdError').css('display', 'none');
  });
  $('#contact-input').keyup(function () {
    $('#contact-input').css('border-color', '#dddddd');
    $('#contactError').css('display', 'none');
  });

  if (value !== undefined) {
    $('div.dropdown').remove();
    if (mobilewidth > 768) {
      $('a.howtowork,.headerOption').remove();
    }
    $('.nonprofitbtnsection,.contributeBtnoutofflogin').remove();
    $('.mobile-links').remove();
    $('a.loginbtn').remove();
    // $('.mobilebarsbutton').remove();
    // $ ('button.homeGetStartBtn').remove ();
    // $ ('button.homeSignupBtn').remove ();
    $('button.slide3btn').remove();
    $('button.slide4btn').remove();
  } else {
    $('.mobile-links-logout').remove();
    $('.logoutbtn').remove();
    $('div.userDetail,.dashboardLink,.logoutbtn_text').remove();
    $('button.contributeNowBtnContainer').remove();
    $('.fixedContribute').remove();
  }
  $('.logoutbtn_text').on('click', function (event) {
    $.removeCookie('Authorization');
  });
});
