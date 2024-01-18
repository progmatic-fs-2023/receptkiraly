import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registrationMessage, setRegistrationMessage] = useState();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setRegistrationMessage('Registration successful!');
      } else {
        setRegistrationMessage(data.error);
      }
    } catch (err) {
      setRegistrationMessage('An error occurred during registration.');
    }
  };

  const [checkedTerm, setCheckedTerm] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);
  const handleChangeTerm = (event) => {
    setCheckedTerm(event.target.checked);
  };
  const handleChangePrivacy = (event) => {
    setCheckedPrivacy(event.target.checked);
  };

  return (
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label className="leading-7 text-sm text-gray-600" htmlFor="username">
          Username:
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="leading-7 text-sm text-gray-600" htmlFor="email">
          Email:
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="leading-7 text-sm text-gray-600" htmlFor="password">
          Password:
          <input
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>

        {registrationMessage && <div>{registrationMessage}</div>}
        <div className="flex  m-4">
          <div className="flex items-center">
            <input
              onChange={handleChangeTerm}
              name="checked"
              id="termsId"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="termsId"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <button
                type="button"
                className="underline text-blue-500 hover:opacity-80 focus:outline-none"
                onClick={() => setShowPrivacyPolicy(true)}
              >
                privacy and policy
              </button>
              .
            </label>
          </div>
          <div className="flex items-center  my-2">
            <input
              onChange={handleChangePrivacy}
              name="checked"
              id="privacyId"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="privacyId"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <button
                type="button"
                className="underline text-blue-500 hover:opacity-80 focus:outline-none"
                onClick={() => setShowTermsOfUse(true)}
              >terms of use</button>
              .
            </label>
          </div>
        </div>
        <div className="flex-row flex justify-center m-4">
          {' '}
          <Button
            text="Submit"
            type="submit"
            addClassName={`text-white px-4 py-2 rounded focus:outline-none  ${
              checkedTerm && checkedPrivacy ? 'bg-amber-300' : 'bg-amber-200'
            } rounded text-lg `}
            disabled={!(checkedTerm && checkedPrivacy)}
          />
        </div>
      </form>
      {showPrivacyPolicy ? (
        <Modal title="Privacy and policy" close={() => setShowPrivacyPolicy(false)}>
          <>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="Generator" content="Microsoft Word 15 (filtered)" />
            <style>
              {`
      /* Font Definitions */
      @font-face
      {font-family:"Cambria Math";
      panose-1:2 4 5 3 5 4 6 3 2 4;}
      @font-face
      {font-family:Calibri;
      panose-1:2 15 5 2 2 2 4 3 2 4;}
      @font-face
      {font-family:Aptos;}
      /* Style Definitions */
      p.MsoNormal, li.MsoNormal, div.MsoNormal
      {margin-top:0in;
      margin-right:0in;
      margin-bottom:8.0pt;
      margin-left:0in;
      line-height:107%;
      font-size:11.0pt;
      font-family:"Aptos",sans-serif;}
      .MsoChpDefault
      {font-family:"Aptos",sans-serif;}
      .MsoPapDefault
      {margin-bottom:8.0pt;
      line-height:107%;}
      @page WordSection1
      {size:595.3pt 841.9pt;
      margin:70.85pt 70.85pt 70.85pt 70.85pt;}
      div.WordSection1
      {page:WordSection1;}
      /* List Definitions */
      ol
      {margin-bottom:0in;}
      ul
      {margin-bottom:0in;}
    `}
            </style>
            <div className="WordSection1">
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '20.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Data policy
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  This policy describes the information that we process to support Recipe King
                  website (hereinafter &#34;Website&#34;) and other products and features offered by
                  Website.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    I. What kinds of information do we collect?
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  To provide the functions of the Website, we must process information about you.
                  The type of information that we collect depends on how you use our Website.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Things that you and others do and provide.
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Information and content you provide.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;We collect the content, communications and other information you provide
                  when you use our Website, including when you sign up for an account, create or
                  share content and message or communicate with others. This can include information
                  in or about the content that you provide (e.g. metadata), such as the location of
                  a photo or the date a file was created. It can also include what you see through
                  features that we provide. Our systems automatically process content and
                  communications that you and others provide to analyse context and what&#39;s in
                  them for the purposes described&nbsp;
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: 'black',
                  }}
                >
                  below
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  .
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '30.0pt',
                  marginBottom: '0in',
                  marginLeft: '102.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  Data with special protections: You can choose to provide information displayed in
                  the Website&nbsp;like life events about your religious views, political views, who
                  you are &#34;interested in&#34; or your health. This and other information (such
                  as racial or ethnic origin, philosophical beliefs or trade union membership) is
                  subject to special protections under EU law.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Networks and connections.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;We collect information about the people, accounts&nbsp;that you are
                  connected to and how you interact with them across the Website, such as people you
                  communicate with the most or groups that you are part of.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Your usage.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;We collect information about how you use our Website, such as the types of
                  content that you view or engage with, the features you use, the actions you take,
                  the people or accounts you interact with and the time, frequency and duration of
                  your activities. For example, we log when you&#39;re using and have last used our
                  Website, and what posts, videos and other content you view on our Website. We also
                  collect information about how you use features such as our camera.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Things others do and information they provide about you.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;We also receive and analyse content, communications and information that
                  other people provide when they use our Website. This can include information about
                  you, such as when others share or comment on a photo of you, send a message to you
                  or upload, sync or import your contact information.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '12.0pt', fontFamily: '"Calibri",sans-serif' }}
                >
                  &nbsp;
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Device information.
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  As described below, we collect information from and about the computers, phones,
                  connected TVs and other web-connected devices you use that integrate with our
                  Website, and we combine this information across different devices you use. For
                  example, we use information collected about your use of our Website on your phone
                  to better personalise the content or features that you see when you use our
                  Website on another device, such as your laptop or tablet, or to measure whether
                  you took an action in response to an ad that we showed you on your phone on a
                  different device.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  Information we obtain from these devices includes:
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Device attributes:
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;information such as the operating system, hardware and software versions,
                  battery level, signal strength, available storage space, browser type, app and
                  file names and types, and plugins.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Device operations:
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;information about operations and behaviours performed on the device, such as
                  whether a window is in the foreground or background, or mouse movements (which can
                  help distinguish humans from bots).
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Identifiers:
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;unique identifiers, device IDs and other identifiers.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Data from device settings:
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;information you allow us to receive through device settings that you turn
                  on, such as access to your GPS location, camera or photos.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Network and connections:
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;information such as the name of your mobile operator or ISP, language, time
                  zone, mobile phone number, IP address, connection speed and, in some cases,
                  information about other devices that are nearby or on your network.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '8.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Cookie data:
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;data from cookies stored on your device, including cookie IDs and settings.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '12.0pt', fontFamily: '"Calibri",sans-serif' }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    II. How do we use this information?
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We use the information that we have (subject to choices you make) as described
                  below and to provide and support the Website. Here&#39;s how:
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '12.0pt', fontFamily: '"Calibri",sans-serif' }}
                >
                  &nbsp;
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Promoting safety, integrity and security.
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We use the information that we have to verify accounts and activity, combat
                  harmful conduct, detect and prevent spam and other bad experiences, maintain the
                  integrity of our Website, and promote safety and security. For example, we use
                  data that we have to investigate suspicious activity or violations of our Terms or
                  Policies.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '12.0pt', fontFamily: '"Calibri",sans-serif' }}
                >
                  &nbsp;
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Communicate with you.
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We use the information that we have to send you marketing communications,
                  communicate with you about our Products and let you know about our Policies and
                  Terms. We also use your information to respond to you when you contact us.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '12.0pt', fontFamily: '"Calibri",sans-serif' }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    III. How is this information shared?
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  Your information is shared with others in the following ways:
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Sharing on Meta Products
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    People and accounts that you share and communicate with
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  When you share and communicate using our Website, you choose the audience for what
                  you share. For example, when you post on Website, the visitors of the Website can
                  see the content you send.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  Public information can be seen by anyone, on our Website, including if they
                  don&#39;t have an account. This includes your username, any information and
                  content you share with a public audience. Public information can also be seen,
                  accessed, reshared or downloaded through third-party services such as search
                  engines, APIs.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Content that others share or reshare about you.
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  You should consider who you choose to share with, because people who can see your
                  activity on our Website can choose to share it with others on and off our Website,
                  including people and businesses outside the audience that you shared with. For
                  example, when you share a post, photo or write a comment, visitors of the Website
                  can download, screenshot or reshare that content to others across or off our
                  Website. Also, when you comment on someone else&#39;s post or react to their
                  content, your comment or reaction will be visible to anyone who can see the other
                  person&#39;s content, and that person will be able to change the audience later.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  People can also use our Website to create and share content about you with the
                  audience they choose.{' '}
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    New owner.
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  If the ownership or control of all or part of our Website or their assets changes,
                  we may transfer your information to the new owner.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Law enforcement or legal requests.
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We share information with law enforcement or in response to legal requests in the
                  circumstances outlined below.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    IV. What is our legal basis for processing data?
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We collect, use and share the data that we have in the ways described above:
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  as necessary to fulfil our&nbsp;
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: 'black',
                  }}
                >
                  Terms and Conditions
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  ;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{ fontSize: '12.0pt', fontFamily: '"Calibri",sans-serif' }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  consistent with your consent, which you may revoke at any time;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  as necessary to comply with our legal obligations
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  to protect your vital interests, or those of others
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  as necessary in the public interest and
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  as necessary for our (or others&#39;) legitimate interests, including our
                  interests in providing an innovative, personalised, safe and profitable service to
                  our users and partners, unless those interests are overridden by your interests or
                  fundamental rights and freedoms that require protection of personal data.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    V. How can you exercise your rights provided under the GDPR?
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  Under the General Data Protection Regulation, you have the right to access,
                  rectify, port and erase&nbsp;your data. You also have the right to object
                  to&nbsp;and restrict certain processing of your data. This includes:
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  the right to object to our processing of your data for direct marketing, which you
                  can exercise by using the &#34;unsubscribe&#34; link in such marketing
                  communications, and
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  the right to object to our processing of your data where we are performing a task
                  in the public interest or pursuing our legitimate interests or those of a third
                  party. You can exercise this right on the Website.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginBottom: '12.0pt',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    VI. Data retention, account deactivation and deletion
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We store data until it is no longer necessary to provide our services and Website,
                  or until your account is deleted – whichever comes first. This is a case-by-case
                  determination that depends on things such as the nature of the data, why it is
                  collected and processed, and relevant legal or operational retention needs.{' '}
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  When you delete your account, we&nbsp;
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: 'black',
                  }}
                >
                  delete things
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;that you have posted, such as your photos and status updates, and you
                  won&#39;t be able to recover this information later. Information that others have
                  shared about you isn&#39;t part of your account and won&#39;t be deleted.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginBottom: '12.0pt',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    VII. How do we respond to legal requests or prevent harm?
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We access, preserve and share your information with regulators, law enforcement or
                  others:
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  In response to a legal request, if we have a good-faith belief that the law
                  requires us to do so. We can also respond to legal requests when we have a
                  good-faith belief that the response is required by law in that jurisdiction,
                  affects users in that jurisdiction and is consistent with internationally
                  recognised standards.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  When we have a good-faith belief that it is necessary to: detect, prevent and
                  address fraud, unauthorised use of the Website, breaches of our Terms or Policies,
                  or other harmful or illegal activity; to protect ourselves (including our rights,
                  property or products), you or others, including as part of investigations or
                  regulatory enquiries; or to prevent death or imminent bodily harm. For example, if
                  relevant, we provide information to and receive information from third-party
                  partners about the reliability of your account to prevent fraud, abuse and other
                  harmful activity on and off our Website.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  Information that we receive about you can be accessed and preserved for an
                  extended period when it is the subject of a legal request or obligation,
                  governmental investigation or investigations of possible violations of our terms
                  or policies, or otherwise to prevent harm. We also retain information from
                  accounts disabled for term breaches for at least a year to prevent repeat abuse or
                  other term breaches.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginBottom: '12.0pt',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    VIII. How will we notify you of changes to this Policy?
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We&#39;ll notify you before we make changes to this Policy and give you the
                  opportunity to review the revised Policy before you choose to continue using our
                  Website.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginBottom: '12.0pt',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    IX. How to contact us with questions
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  If you have questions about this policy, you can contact us as described below.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  The data controller responsible for your information is Recipe King Kft., which
                  you can contact by writing to:
                  <br />
                  <br />
                  Recipe King Kft.
                  <br />
                  Bécsi út 53.
                  <br />
                  1036 Budapest
                  <br />
                  Hungary
                  <br />
                  <br />
                  You also have the right to lodge a complaint with Recipe King Kft.&#39;s lead
                  supervisory authority, the Hungarian National Authority for Data Protection and
                  Freedom of Information Falk Miksa u. 9-11, 1055 Budapest, Hungary), or your local
                  supervisory authority.
                </span>
              </p>
              <p className="MsoNormal">
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    lineHeight: '107%',
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  &nbsp;
                </span>
              </p>
            </div>
          </>
        </Modal>
      ) : null}
      {showTermsOfUse ? (
        <Modal title="Terms of use" close={() => setShowTermsOfUse(false)}>
          <>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="Generator" content="Microsoft Word 15 (filtered)" />
            <style>
              {`
      /* Font Definitions */
      @font-face
      {font-family:"Cambria Math";
      panose-1:2 4 5 3 5 4 6 3 2 4;}
      @font-face
      {font-family:Calibri;
      panose-1:2 15 5 2 2 2 4 3 2 4;}
      @font-face
      {font-family:Aptos;}
      /* Style Definitions */
      p.MsoNormal, li.MsoNormal, div.MsoNormal
      {margin-top:0in;
      margin-right:0in;
      margin-bottom:8.0pt;
      margin-left:0in;
      line-height:107%;
      font-size:11.0pt;
      font-family:"Aptos",sans-serif;}
      .MsoChpDefault
      {font-family:"Aptos",sans-serif;}
      .MsoPapDefault
      {margin-bottom:8.0pt;
      line-height:107%;}
      @page WordSection1
      {size:595.3pt 841.9pt;
      margin:70.85pt 70.85pt 70.85pt 70.85pt;}
      div.WordSection1
      {page:WordSection1;}
      /* List Definitions */
      ol
      {margin-bottom:0in;}
      ul
      {margin-bottom:0in;}
    `}
            </style>
            <div className="WordSection1">
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '20.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Terms and Conditions
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginBottom: '12.0pt',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginBottom: '12.0pt',
                  textAlign: 'justify',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Welcome to Recipe King!
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginBottom: '12.0pt',
                  textAlign: 'justify',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  These Terms and Conditions (hereinafter &#34;Terms&#34;) govern your use of Recipe
                  King website (hereinafter &#34;Website&#34;). When you create a Recipe King
                  account or use Recipe King website, you agree to these Terms.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginBottom: '12.0pt',
                  textAlign: 'justify',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  <br />
                  <b>Your commitments</b>
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  In return for our commitment to provide the Recipe King website, we require you to
                  make the below commitments to us.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Who can use Recipe King.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;We want our Website to be as open and inclusive as possible, but we also
                  want it to be safe, secure and in accordance with the law. So, we need you to
                  commit to a few restrictions in order to be part of the Instagram community.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  You must be at least 14 years old.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  You must not be prohibited from receiving in any aspect any information displayed
                  on the Website under applicable laws.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We must not have previously disabled your account for violation of law or any of
                  our policies or regulations of these Terms.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  You must not be a convicted sex offender.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    How you can&#39;t use Recipe King.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;Providing a safe and open Website for a broad community requires that we all
                  do our part.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t impersonate others or provide inaccurate information.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  <br />
                  You don&#39;t have to disclose your identity on Website, but you must provide us
                  with accurate and up-to-date information (including registration information),
                  which may include providing personal data. Also, you may not impersonate someone
                  or something you aren&#39;t, and you can&#39;t create an account for someone else
                  unless you have their express permission.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t do anything unlawful, misleading or fraudulent or for an illegal
                    or unauthorised purpose.
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t violate (or help or encourage others to violate) these Terms or
                    our policies
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  .
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t post branded content.
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t do anything to interfere with or impair the intended operation of
                    the Website.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  <br />
                  This includes misusing any reporting, dispute or appeals channel, such as by
                  making fraudulent or groundless reports or appeals.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t attempt to create accounts or access or collect information in
                    unauthorised ways.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  <br />
                  This includes creating accounts or collecting information in an automated way
                  without our express permission.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t sell, license or purchase any account or data obtained from us or
                    our Website.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  <br />
                  This includes attempts to buy, sell or transfer any aspect of your account
                  (including your username); solicit, collect or use login credentials or badges of
                  other users; or request or collect Recipe King usernames, passwords or
                  misappropriate access tokens.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t post someone else&#39;s private or confidential information
                    without permission or do anything that violates someone else&#39;s rights,
                    including intellectual property rights (e.g. copyright infringement, trademark
                    infringement, counterfeit or pirated goods).
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  <br />
                  You may use someone else&#39;s works under exceptions or limitations to copyright
                  and related rights under applicable law. You represent that you own or have
                  obtained all necessary rights to the content you post or share.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t modify, translate, create derivative works of or reverse-engineer
                    our products or their components.
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You can&#39;t use a domain name or URL in your username without our prior
                    written consent.
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Permissions you give to us.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;As part of our agreement, you also give us permissions that we need to
                  provide the content of the Website.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    We do not claim ownership of your content, but you grant us a licence to use it.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  <br />
                  Nothing is changing about your rights in your content. We do not claim ownership
                  of your content that you post on or through the Website and you are free to share
                  your content with anyone else, wherever you choose. However, we need certain legal
                  permissions from you (known as a &#34;licence&#34;) to provide the content of the
                  Website. When you share, post or upload content that is covered by intellectual
                  property rights (such as photos or videos) on or in connection with our Website,
                  you hereby grant to us a non-exclusive, royalty-free, transferable, sublicensable,
                  worldwide licence to host, use, distribute, modify, run, copy, publicly perform or
                  display, translate and create derivative works of your content (consistent with
                  your privacy and application settings). This licence will end when your content is
                  deleted from our systems. You can delete content individually or all at once by
                  deleting your account.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Permission to use your username, profile picture and information about your
                    relationships and actions with accounts, ads and sponsored content.
                  </span>
                </b>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  <br />
                  You give us permission to show your username, profile picture and information
                  about your actions (such as likes) or relationships (such as follows) next to or
                  in connection with accounts, ads, offers and other sponsored content that you
                  follow or engage with that are displayed on Website, without any compensation to
                  you. For example, we may show that you liked a sponsored post created by a brand
                  that has paid us to display its ads on Website. As with actions on other content
                  and follows of other accounts, actions on sponsored content and follows of
                  sponsored accounts can only be seen by people who have permission to see that
                  content or follow. We will also respect your ad settings.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    You agree that we can download and install updates to the Website on your
                    device.
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Additional rights we retain
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  If you select a username or similar identifier for your account, we may change it
                  if we believe it is appropriate or necessary (for example, if it infringes
                  someone&#39;s intellectual property or impersonates another user).
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  If you use content covered by intellectual property rights that we have and make
                  available in our Website (for example, images, designs, videos or sounds we
                  provide that you add to content you create or share), we retain all rights to our
                  content (but not yours).
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  You can only use our intellectual property and trademarks or similar marks as
                  expressly permitted with our prior written permission.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  You must obtain written permission from us or under an open-source licence to
                  modify, create derivative works of, decompile or otherwise attempt to extract
                  source code from us.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Content removal and disabling or terminating your account
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '0in',
                  marginRight: '15.0pt',
                  marginBottom: '0in',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We can remove or restrict any content or information that you share on the Website
                  if we believe that it violates these Terms, our policies or we are required to do
                  so by law. We can refuse to provide or stop providing all or part of the
                  Website&#39;s content to you (including terminating or disabling your access to
                  the Website) immediately to protect our community or services, or if you create
                  risk or legal exposure for us, violate these Terms or our policies, if you
                  repeatedly infringe other people&#39;s intellectual property rights or where we
                  are required to do so by law. We can also terminate or change the Website, remove
                  or block content or information shared on our Website, or stop providing all or
                  part of the Website&#39;s content if we determine that doing so is reasonably
                  necessary to avoid or mitigate adverse legal or regulatory impacts on us. In some
                  cases when we remove content, we&#39;ll let you know and explain any options that
                  you have to request another review, unless you seriously or repeatedly violate
                  these Terms, or if doing so may expose us or others to legal liability; harm our
                  community of users; compromise or interfere with the integrity or operation of any
                  of our services, systems or products; where we are restricted due to technical
                  limitations; or where we are prohibited from doing so for legal reasons. When you
                  request to delete content on your account, the deletion process will automatically
                  begin no more than 30 days after your request. It may take up to 90 days to delete
                  content after the deletion process has begun. While the deletion process for such
                  content is being undertaken, the content is no longer visible to other users, but
                  remains subject to these Terms and our Privacy Policy. After the content has been
                  deleted, it may take us up to another 90 days to remove it from backups and
                  disaster recovery systems.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  Content will not be deleted within 90 days of the account deletion or content
                  deletion process beginning in the following situations:
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '30.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '102.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  where your content has been used by others in accordance with this licence and
                  they have not deleted it (in which case this licence will continue to apply until
                  that content has been deleted); or
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '30.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '102.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  where deletion within 90 days is not possible due to technical limitations of our
                  systems, in which case, we will complete the deletion as soon as technically
                  feasible; or
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '30.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '102.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  where deletion would restrict our ability to:
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '45.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '153.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span lang="EN-GB" style={{ fontSize: '10.0pt', fontFamily: 'Symbol' }}>
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  investigate or identify illegal activity or violations of our terms and policies
                  (for example, to identify or investigate misuse of our products or systems);
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '45.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '153.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  protect the safety and security of our products, systems and users;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '45.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '153.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  comply with a legal obligation, such as the preservation of evidence; or
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '45.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '153.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  comply with a request of a judicial or administrative authority, law enforcement
                  or a government agency;
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '30.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '102.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  in which case, the content will be retained for no longer than is necessary for
                  the purposes for which it has been retained (the exact duration will vary on a
                  case-by-case basis).
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  If you delete or we disable your account, these Terms shall terminate as an
                  agreement between you and us, but this section and the section below called
                  &#34;Our agreement and what happens if we disagree&#34; will still apply even
                  after your account has been terminated, disabled or deleted.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Our agreement and what happens if we disagree
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Our agreement.
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  If any aspect of this agreement is unenforceable, the rest will remain in effect.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  Any amendment or waiver to our agreement must be in writing and signed by us. If
                  we fail to enforce any aspect of this agreement, it will not be a waiver.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We reserve all rights not expressly granted to you.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Who has rights under this agreement.
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  This agreement does not give rights to any third parties.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  You cannot transfer your rights or obligations under this agreement without our
                  consent.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  Our rights and obligations can be assigned to others. For example, this could
                  occur if our ownership changes (as in a merger, acquisition or sale of assets) or
                  by law.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Who is responsible if something happens.
                  </span>
                </b>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We will use reasonable skill and care in providing our Website&#39;s content to
                  you and in keeping a safe, secure and error-free environment, but we cannot
                  guarantee that our Website will always function without disruptions, delays or
                  imperfections. Provided that we have acted with reasonable skill and care, we do
                  not accept responsibility for: losses not caused by our breach of these Terms or
                  otherwise by our acts; losses which are not reasonably foreseeable by you and us
                  at the time of entering into these Terms; any offensive, inappropriate, obscene,
                  unlawful or otherwise objectionable content posted by others that you may
                  encounter on our Website; and events beyond our reasonable control.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: '12.0pt',
                  marginRight: '15.0pt',
                  marginBottom: '12.0pt',
                  marginLeft: '51.0pt',
                  textIndent: '-.25in',
                  lineHeight: 'normal',
                  background: 'white',
                }}
              >
                <span
                  lang="EN-GB"
                  style={{ fontSize: '10.0pt', fontFamily: 'Symbol', color: '#1C1E21' }}
                >
                  ·
                  <span style={{ font: '7.0pt "Times New Roman"' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  The above does not exclude or limit our liability for death, personal injury or
                  fraudulent misrepresentation caused by our negligence. It also does not exclude or
                  limit our liability for any other things where the law does not permit us to do
                  so.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    How we will handle disputes.
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  If a claim or dispute arises out of or relates to your use of the Website as a
                  consumer, both you and us agree that you may resolve your individual claim or
                  dispute against us, and we may resolve our claim or dispute against you, in any
                  competent court in the country of your main residence that has jurisdiction over
                  your claim or dispute, and the laws of that country will apply without regard to
                  conflict of law provisions.
                  <br />
                  <br />
                  If a claim or dispute arises between us that relates to use of the Website in any
                  other capacity, including, but not limited to, access or use of the Website for a
                  business or commercial purpose, you agree that any such claim or dispute must be
                  resolved in a competent court in Hungary and that Hungarian law will apply without
                  regard to conflict of law provisions.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: '0in', lineHeight: 'normal', background: 'white' }}
              >
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Unsolicited material.
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We always appreciate feedback or other suggestions, but may use them without any
                  restrictions or obligation to compensate you for them, and are under no obligation
                  to keep them confidential.
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <b>
                  <span
                    lang="EN-GB"
                    style={{
                      fontSize: '12.0pt',
                      fontFamily: '"Calibri",sans-serif',
                      color: '#1C1E21',
                    }}
                  >
                    Updating these Terms
                  </span>
                </b>
              </p>
              <p className="MsoNormal" style={{ lineHeight: 'normal', background: 'white' }}>
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    fontFamily: '"Calibri",sans-serif',
                    color: '#1C1E21',
                  }}
                >
                  We may change our Website and policies, and we may need to make changes to these
                  Terms so that they accurately reflect our Website and policies. Unless otherwise
                  required by law, we will notify you (for example, through our Website) at least 30
                  days before we make changes to these Terms and give you an opportunity to review
                  them before they go into effect. Then, if you continue to use the Website, you
                  will be bound by the updated Terms. If you do not want to agree to these or any
                  updated Terms, you can delete your account.
                </span>
              </p>
              <p className="MsoNormal">
                <span
                  lang="EN-GB"
                  style={{
                    fontSize: '12.0pt',
                    lineHeight: '107%',
                    fontFamily: '"Calibri",sans-serif',
                  }}
                >
                  &nbsp;
                </span>
              </p>
            </div>
          </>
        </Modal>
      ) : null}
    </div>
  );
}
export default Registration;
