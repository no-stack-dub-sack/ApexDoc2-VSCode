export default `<!DOCTYPE html>
<html lang="en">

  <head>
    <title>My Test Docs</title>
    <meta charset="UTF-8">
    <script type="text/javascript" src="./assets/index.js"></script>
    <script charset="UTF-8" src="./assets/highlight.js"></script>
    <link rel="stylesheet" href="./assets/highlight.css" />
    <link rel="stylesheet" type="text/css" href="./assets/index.css" />
    <link rel="shortcut icon" type="image/png" href="./assets/favicon.png" />
  </head>

  <body>
    <div class="topsection">
      <table>
        <tr>
          <td>
            <img src="./assets/apexdoc2-logo.png" style="height: 90px; margin-left: 5px;" />
          </td>
          <td>
            <h2 style="margin: -15px 0 0 0;">ApexDoc2 | Apex Documentation</h2>Check out the GitHub project at:<br />
            <a href="https://github.com/no-stack-dub-sack/ApexDoc2-VSCode">
              https://github.com/no-stack-dub-sack/ApexDoc2-VSCode
            </a>
            <br />
          </td>
        </tr>
      </table>
    </div>
    <table width="100%">

      <tr>
        <td colspan="2" style="text-align: center;">
          Show: <input type="checkbox" checked="true" id="cbx-all" onclick="toggleAllScopes(this.checked);" />
          <label for="cbx-all">All</label>&nbsp;&nbsp;
          <input type="checkbox" checked="true" id="cbx-public" onclick="toggleScope('public', this.checked);" />
          <label for="cbx-public">
            public
          </label>&nbsp;&nbsp;<input type="checkbox" checked="true" id="cbx-private" onclick="toggleScope('private', this.checked);" />
          <label for="cbx-private">
            private
          </label>&nbsp;&nbsp;<input type="checkbox" checked="true" id="cbx-protected" onclick="toggleScope('protected', this.checked);" />
          <label for="cbx-protected">
            protected
          </label>&nbsp;&nbsp;<input type="checkbox" checked="true" id="cbx-global" onclick="toggleScope('global', this.checked);" />
          <label for="cbx-global">
            global
          </label>
        </td>
      </tr>
      <tr style="vertical-align:top;">
        <!-- 22% width accommodates 40 char class names -->
        <td width="22%" vertical-align="top">
          <div class="navbar">
            <nav role="navigation">
              <a class="navHeader" id="home" href="javascript:void(0)" onclick="goToLocation('index.html');">
                Home
              </a>
              <details id="Dreamhouse_Bot" class="groupName">
                <summary onclick="toggleActiveClass(this);" id="header-Dreamhouse_Bot" class="navHeader">
                  <span>Dreamhouse Bot</span>
                </summary>
                <ul>
                  <!-- menu items will be appended here -->
                  <li id="item-TEST_BotField" class="navItem class public" onclick="goToLocation('TEST_BotField.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_BotField</a>
                  </li>
                  <li id="item-TEST_BotHandler" class="navItem class public" onclick="goToLocation('TEST_BotHandler.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_BotHandler</a>
                  </li>
                  <li id="item-TEST_BotItem" class="navItem class public" onclick="goToLocation('TEST_BotItem.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_BotItem</a>
                  </li>
                  <li id="item-TEST_BotMessage" class="navItem class public" onclick="goToLocation('TEST_BotMessage.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_BotMessage</a>
                  </li>
                </ul>
              </details>
              <details id="Dreamhouse_Bot_Handlers" class="groupName">
                <summary onclick="toggleActiveClass(this);" id="header-Dreamhouse_Bot_Handlers" class="navHeader">
                  <span>Dreamhouse Bot Handlers</span>
                </summary>
                <ul>
                  <!-- menu items will be appended here -->
                  <li id="item-TEST_HandlerSOQL" class="navItem class public" onclick="goToLocation('TEST_HandlerSOQL.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_HandlerSOQL</a>
                  </li>
                </ul>
              </details>
              <details id="Dreamhouse_Slack_Bot" class="groupName">
                <summary onclick="toggleActiveClass(this);" id="header-Dreamhouse_Slack_Bot" class="navHeader">
                  <span>Dreamhouse Slack Bot</span>
                </summary>
                <ul>
                  <!-- menu items will be appended here -->
                  <li id="item-TEST_SlackOpportunityPublisher" class="navItem class public" onclick="goToLocation('TEST_SlackOpportunityPublisher.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_SlackOpportunityPublisher</a>
                  </li>
                </ul>
              </details>
              <details id="Dreamhouse_Utils" class="groupName">
                <summary onclick="toggleActiveClass(this);" id="header-Dreamhouse_Utils" class="navHeader">
                  <span>Dreamhouse Utils</span>
                </summary>
                <ul>
                  <!-- menu items will be appended here -->
                  <li id="item-TEST_JWT" class="navItem class public" onclick="goToLocation('TEST_JWT.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_JWT</a>
                  </li>
                  <li id="item-TEST_JWTBearerFlow" class="navItem class public" onclick="goToLocation('TEST_JWTBearerFlow.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_JWTBearerFlow</a>
                  </li>
                </ul>
              </details>
              <details id="Global_Utils" class="groupName">
                <summary onclick="toggleActiveClass(this);" id="header-Global_Utils" class="navHeader">
                  <span>Global Utils</span>
                </summary>
                <ul>
                  <!-- menu items will be appended here -->
                  <li id="item-TEST_ArrayUtils" class="navItem class global" onclick="goToLocation('TEST_ArrayUtils.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_ArrayUtils</a>
                  </li>
                  <li id="item-TEST_IllegalStateException" class="navItem class global" onclick="goToLocation('TEST_IllegalStateException.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_IllegalStateException</a>
                  </li>
                  <li id="item-TEST_IObjectComparator" class="navItem class global" onclick="goToLocation('TEST_IObjectComparator.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_IObjectComparator</a>
                  </li>
                  <li id="item-TEST_ISObjectComparator" class="navItem class global" onclick="goToLocation('TEST_ISObjectComparator.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_ISObjectComparator</a>
                  </li>
                  <li id="item-TEST_MyRestResource" class="navItem class global" onclick="goToLocation('TEST_MyRestResource.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_MyRestResource</a>
                  </li>
                  <li id="item-TEST_PrimitiveComparator" class="navItem class global" onclick="goToLocation('TEST_PrimitiveComparator.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_PrimitiveComparator</a>
                  </li>
                  <li id="item-TEST_Status" class="navItem class public" onclick="goToLocation('TEST_Status.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_Status</a>
                  </li>
                  <li id="item-TEST_StopWatch" class="navItem class global" onclick="goToLocation('TEST_StopWatch.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_StopWatch</a>
                  </li>
                </ul>
              </details>
              <details id="Miscellaneous" class="groupName">
                <summary onclick="toggleActiveClass(this);" id="header-Miscellaneous" class="navHeader">
                  <span>Miscellaneous</span>
                </summary>
                <ul>
                  <!-- menu items will be appended here -->
                  <li id="item-IncludeOne" class="navItem class public" onclick="goToLocation('IncludeOne.html');">
                    <a tabindex="1" href="javascript:void(0)">IncludeOne</a>
                  </li>
                  <li id="item-TEST_LIFXController" class="navItem class public" onclick="goToLocation('TEST_LIFXController.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_LIFXController</a>
                  </li>
                  <li id="item-TEST_SampleDataController" class="navItem class public" onclick="goToLocation('TEST_SampleDataController.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_SampleDataController</a>
                  </li>
                  <li id="item-IncludeTwo" class="navItem class public" onclick="goToLocation('IncludeTwo.html');">
                    <a tabindex="1" href="javascript:void(0)">IncludeTwo</a>
                  </li>
                  <li id="item-TEST_Gotchas" class="navItem class public" onclick="goToLocation('TEST_Gotchas.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_Gotchas</a>
                  </li>
                </ul>
              </details>
            </nav>
          </div>
        </td>
        <td class="contentTD">
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_Gotchas">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L13">
                  TEST_Gotchas
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>

            <div class="classAnnotations">@FirstAnnotation @SecondAnnotation @ThirdAnnotation</div>

            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L13">
                public class TEST_Gotchas
              </a>
            </div>
            <div class="classDetails">
              <div class="">The Code in this class does not always need to be valid. Just using it to test how ApexDoc2 parses comments and creates HTML. This &#39;class&#39; has a bunch of potential gotchas in it. We&#39;ll use the output to perform snapshot testing to make sure nothing changes when we make changes to the code. <br><br> This should create a break in the HTML.</div><br />P. Weinberg<br />2019
            </div>
            <p />
            <details class="subSection properties" open>
              <summary>
                <h2 class="subsectionTitle properties">Properties</h2>
              </summary>

              <div class="subsectionContainer">
                <table class="attrTable properties">

                  <tr>
                    <th>Name</th>
                    <th>Signature</th>
                    <th>Annotations</th>
                    <th>Description</th>
                  </tr>
                  <tr class="property private">
                    <td class="attrName">m</td>
                    <td>
                      <div class="attrSignature">
                        <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L116">
                          private final String <span class="hljs-title">m<span>
                </a></div></td>
                <td></td>
                <td><div class="attrDescription">will be invisible because it starts with a complex type</div></td>
            </tr>
            <tr class="property private">
                <td class="attrName">MY_INT</td>
                <td><div class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L64">
                    private static final Integer <span class="hljs-title">MY_INT<span>
                </a></div></td>
                <td><div class="propAnnotations">@InvocableProperty(required=true)</div></td>
                <td><div class="attrDescription">Static final variable (constant) - outer class level only</div></td>
            </tr>
            <tr class="property private">
                <td class="attrName">myInt</td>
                <td><div class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L19">
                    private Integer <span class="hljs-title">myInt<span>
                </a></div></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="property public">
                <td class="attrName">myNum</td>
                <td><div class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L15">
                    public Integer <span class="hljs-title">myNum<span>
                </a></div></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="property private">
                <td class="attrName">myNum2</td>
                <td><div class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L16">
                    private Integer <span class="hljs-title">myNum2<span>
                </a></div></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="property protected">
                <td class="attrName">myNum3</td>
                <td><div class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L17">
                    protected Integer <span class="hljs-title">myNum3<span>
                </a></div></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="property public">
                <td class="attrName">sharedState</td>
                <td><div class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L68">
                    public static String <span class="hljs-title">sharedState<span>
                </a></div></td>
                <td><div class="propAnnotations">@TestVisible</div></td>
                <td><div class="attrDescription">Non-final static variable - use this to communicate state across triggers within a single request)</div></td>
            </tr>
                </table>
            </div>
            <p />
            </details>
            <details class="subSection enums" open>
                <summary><h2 class="subsectionTitle enums">Enums</h2></summary>
                
            <div class="subsectionContainer">
                <table class="attrTable properties">
                    
            <tr>
                <th>Name</th>
                <th>Signature</th>
                <th>Values</th>
                <th>Description</th>
            </tr>
            <tr class="enum public">
                <td class="attrName">Numbers</td>
                <td class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L38">
                    public enum <span class="hljs-title">Numbers<span>
                </a></td>
                <td class="enumValues">ONE,&nbsp;TWO,&nbsp;THREE,&nbsp;FOUR</td>
                <td class="attrDescription">This will be invisible to ApexDoc2 since it is a prop without an access modifier</td>
            </tr>
            <tr class="enum private">
                <td class="attrName">Randomness</td>
                <td class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L55">
                    enum <span class="hljs-title">Randomness<span>
                </a></td>
                <td class="enumValues">STRING,&nbsp;INTEGER,&nbsp;DOUBLE,&nbsp;LIST,&nbsp;ENUM,&nbsp;CLASS,&nbsp;INTERFACE,&nbsp;SET,&nbsp;MAP,&nbsp;WAYNES_WORLD,&nbsp;EXCELLENT</td>
                <td class="attrDescription">Wonky, should still be parsed correctly</td>
            </tr>
            <tr class="enum private">
                <td class="attrName">Seasons</td>
                <td class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L43">
                    private enum <span class="hljs-title">Seasons<span>
                </a></td>
                <td class="enumValues">SPRING,&nbsp;WINTER,&nbsp;SUMMER,&nbsp;FALL,&nbsp;SUMMER_FALL,&nbsp;FALL_SUMMER</td>
                <td class="attrDescription">Some other enum.</td>
            </tr>
                </table>
            </div>
            <p/>
            </details>
            <details class="subSection methods" open>
                <summary><h2 class="subsectionTitle methods">Methods</h2></summary>
                <div class="methodsContainer">
                <ul class="methodTOC"><li class="method public">
                <a class="methodTOCEntry " href="#TEST_Gotchas.annotatedMethod">
                    annotatedMethod
                </a></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_Gotchas.getInt">
                    getInt
                </a></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_Gotchas.getInt_1">
                    getInt
                </a><div class="methodTOCDescription">Static method overload 1</div></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_Gotchas.getInt_2">
                    getInt
                </a><div class="methodTOCDescription">Static method overload 2</div></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_Gotchas.getInt_3">
                    getInt
                </a><div class="methodTOCDescription">Static method overload 3</div></li><li class="method private">
                <a class="methodTOCEntry " href="#TEST_Gotchas.returnsAList">
                    returnsAList
                </a><div class="methodTOCDescription">Should still be visible because line starts with a collection</div></li><li class="method private">
                <a class="methodTOCEntry " href="#TEST_Gotchas.returnsNothing">
                    returnsNothing
                </a><div class="methodTOCDescription">Should still be visible because line starts with a keyword</div></li></ul>
                <div class="method public"><h2 class="methodHeader " id="TEST_Gotchas.annotatedMethod">annotatedMethod</h2><div class="methodAnnotations">@FirstAnnotation @SecondAnnotation @ThirdAnnotation</div>
            <div class="methodSignature">
                
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L93">
                    public static Integer <span class="hljs-title">annotatedMethod</span>()
                        </a>
                      </div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_Gotchas.getInt">getInt</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L75">
                    public static Integer <span class="hljs-title">getInt</span>()
                  </a>
                </div>
                <div class="methodSubTitle ">See</div>
                <div class="methodSubDescription"><span title="A matching reference could not be found!">TEST_Test.getInt</span>, <span title="A matching reference could not be found!">TEST_Test.getInt</span>, <span title="A matching reference could not be found!">TEST_Test.getInt</span></div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_Gotchas.getInt_1">getInt</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L78">
                    public static Integer <span class="hljs-title">getInt</span>(Integer int, Integer int2)
                  </a>
                </div>
                <div class="methodDescription">Static method overload 1</div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_Gotchas.getInt_2">getInt</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L83">
                    public static Integer <span class="hljs-title">getInt</span>(Integer int, Integer int2, Integer int3)
                  </a>
                </div>
                <div class="methodDescription">Static method overload 2</div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_Gotchas.getInt_3">getInt</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L88">
                    public static Integer <span class="hljs-title">getInt</span>(Integer int, Integer int2, Integer int3, Integer int4)
                  </a>
                </div>
                <div class="methodDescription">Static method overload 3</div>
              </div>
              <div class="method private">
                <h2 class="methodHeader " id="TEST_Gotchas.returnsAList">returnsAList</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L98">
                    List&lt;String&gt; <span class="hljs-title">returnsAList</span>()
                  </a>
                </div>
                <div class="methodDescription">Should still be visible because line starts with a collection</div>
              </div>
              <div class="method private">
                <h2 class="methodHeader " id="TEST_Gotchas.returnsNothing">returnsNothing</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L103">
                    void <span class="hljs-title">returnsNothing</span>()
                  </a>
                </div>
                <div class="methodDescription">Should still be visible because line starts with a keyword</div>
              </div>
              </div>
            </details>
          </details>
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_Gotchas.AbstractChildClass">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L204">
                  TEST_Gotchas.AbstractChildClass
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L204">
                public abstract class AbstractChildClass extends InnerClass
              </a>
            </div>
            <div class="classDetails">
              <div class="">Abstract class (that subclasses the class above). No constructor is needed since parent class has a no-argument constructor</div>
            </div>
            <p />
            <details class="subSection methods" open>
              <summary>
                <h2 class="subsectionTitle methods">Methods</h2>
              </summary>
              <div class="methodsContainer">
                <ul class="methodTOC">
                  <li class="method private">
                    <a class="methodTOCEntry " href="#TEST_Gotchas.AbstractChildClass.abstractMethod">
                      abstractMethod
                    </a>
                    <div class="methodTOCDescription">Lorem ipsum and stuff</div>
                  </li>
                  <li class="method protected">
                    <a class="methodTOCEntry " href="#TEST_Gotchas.AbstractChildClass.method2">
                      method2
                    </a>
                    <div class="methodTOCDescription">Lorem ipsum and stuff</div>
                  </li>
                  <li class="method public">
                    <a class="methodTOCEntry " href="#TEST_Gotchas.AbstractChildClass.myMethod">
                      myMethod
                    </a>
                    <div class="methodTOCDescription">Lorem ipsum and stuff</div>
                  </li>
                </ul>
                <div class="method private">
                  <h2 class="methodHeader " id="TEST_Gotchas.AbstractChildClass.abstractMethod">abstractMethod</h2>
                  <div class="methodSignature">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L219">
                      abstract Integer <span class="hljs-title">abstractMethod</span>()
                    </a>
                  </div>
                  <div class="methodDescription">Lorem ipsum and stuff</div>
                </div>
                <div class="method protected">
                  <h2 class="methodHeader " id="TEST_Gotchas.AbstractChildClass.method2">method2</h2>
                  <div class="methodSignature">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L214">
                      protected void <span class="hljs-title">method2</span>()
                    </a>
                  </div>
                  <div class="methodDescription">Lorem ipsum and stuff</div>
                </div>
                <div class="method public">
                  <h2 class="methodHeader " id="TEST_Gotchas.AbstractChildClass.myMethod">myMethod</h2>
                  <div class="methodSignature">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L209">
                      public override void <span class="hljs-title">myMethod</span>()
                    </a>
                  </div>
                  <div class="methodDescription">Lorem ipsum and stuff</div>
                </div>
              </div>
            </details>
          </details>
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_Gotchas.AnotherChildClass">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L240">
                  TEST_Gotchas.AnotherChildClass
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L240">
                public class AnotherChildClass extends InnerClass
              </a>
            </div>
            <div class="classDetails">
              <div class="">A second sub-class of the original InnerClass</div>
            </div>
            <p />
            <details class="subSection methods" open>
              <summary>
                <h2 class="subsectionTitle methods">Methods</h2>
              </summary>
              <div class="methodsContainer">
                <ul class="methodTOC">
                  <li class="method private">
                    <a class="methodTOCEntry " href="#TEST_Gotchas.AnotherChildClass.AnotherChildClass">
                      AnotherChildClass.&lt;init&gt;
                    </a></li>
                  <li class="method private">
                    <a class="methodTOCEntry " href="#TEST_Gotchas.AnotherChildClass.myCollectionMethod">
                      myCollectionMethod
                    </a></li>
                </ul>
                <div class="method private">
                  <h2 class="methodHeader " id="TEST_Gotchas.AnotherChildClass.AnotherChildClass">AnotherChildClass.&lt;init&gt;</h2>
                  <div class="methodSignature">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L241">
                      <span class="hljs-title">AnotherChildClass</span>(String s)
                    </a>
                  </div>
                </div>
                <div class="method private">
                  <h2 class="methodHeader " id="TEST_Gotchas.AnotherChildClass.myCollectionMethod">myCollectionMethod</h2>
                  <div class="methodSignature">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L246">
                      List&lt;String&gt; <span class="hljs-title">myCollectionMethod</span>()
                    </a>
                  </div>
                </div>
              </div>
            </details>
          </details>
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_Gotchas.ConcreteChildClass">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L225">
                  TEST_Gotchas.ConcreteChildClass
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L225">
                public class ConcreteChildClass extends AbstractChildClass
              </a>
            </div>
            <div class="classDetails">
              <div class="">Inner class</div>
            </div>
            <p />
            <details class="subSection methods" open>
              <summary>
                <h2 class="subsectionTitle methods">Methods</h2>
              </summary>
              <div class="methodsContainer">
                <ul class="methodTOC">
                  <li class="method private">
                    <a class="methodTOCEntry " href="#TEST_Gotchas.ConcreteChildClass.abstractMethod">
                      abstractMethod
                    </a>
                    <div class="methodTOCDescription">Our regex should detect and display this annotation in whole</div>
                  </li>
                  <li class="method public">
                    <a class="methodTOCEntry " href="#TEST_Gotchas.ConcreteChildClass.doSomethingUIRelated">
                      doSomethingUIRelated
                    </a>
                    <div class="methodTOCDescription">A method</div>
                  </li>
                </ul>
                <div class="method private">
                  <h2 class="methodHeader " id="TEST_Gotchas.ConcreteChildClass.abstractMethod">abstractMethod</h2>
                  <div class="methodAnnotations">@InvocableMethod(label='Get Account Names' description='Returns the list of account names corresponding to the specified account IDs.')</div>
                  <div class="methodSignature">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L228">
                      override Integer <span class="hljs-title">abstractMethod</span>()
                    </a>
                  </div>
                  <div class="methodDescription">Our regex should detect and display this annotation in whole</div>
                </div>
                <div class="method public">
                  <h2 class="methodHeader " id="TEST_Gotchas.ConcreteChildClass.doSomethingUIRelated">doSomethingUIRelated</h2>
                  <div class="methodAnnotations">@AuraEnabled (cacheable=true)</div>
                  <div class="methodSignature">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L234">
                      public static void <span class="hljs-title">doSomethingUIRelated</span>()
                    </a>
                  </div>
                  <div class="methodDescription">A method</div>
                </div>
              </div>
            </details>
          </details>
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_Gotchas.InnerClass">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L144">
                  TEST_Gotchas.InnerClass
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L144">
                public virtual class InnerClass implements MySecondInterface
              </a>
            </div>
            <div class="classDetails">
              <div class="">Inner class - because it is virtual it can be extended. This class implements an interface that, in turn, extends another interface. Consequently the class must implement all methods.</div>
            </div>
            <p />
            <details class="subSection properties" open>
              <summary>
                <h2 class="subsectionTitle properties">Properties</h2>
              </summary>

              <div class="subsectionContainer">
                <table class="attrTable properties">

                  <tr>
                    <th>Name</th>
                    <th>Signature</th>

                    <th>Description</th>
                  </tr>
                  <tr class="property private">
                    <td class="attrName">i</td>
                    <td>
                      <div class="attrSignature">
                        <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L157">
                          private final Integer <span class="hljs-title">i<span>
                </a></div></td>
                
                <td><div class="attrDescription">Inline initialization (happens after the block above executes)</div></td>
            </tr>
            <tr class="property private">
                <td class="attrName">s</td>
                <td><div class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L147">
                    private final String <span class="hljs-title">s<span>
                </a></div></td>
                
                <td><div class="attrDescription">Inner member variables</div></td>
            </tr>
            <tr class="property private">
                <td class="attrName">s2</td>
                <td><div class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L149">
                    private final String <span class="hljs-title">s2<span>
                </a></div></td>
                
                <td><div class="attrDescription">Inner member variables</div></td>
            </tr>
                </table>
            </div>
            <p />
            </details>
            <details class="subSection methods" open>
                <summary><h2 class="subsectionTitle methods">Methods</h2></summary>
                <div class="methodsContainer">
                <ul class="methodTOC"><li class="method private">
                <a class="methodTOCEntry " href="#TEST_Gotchas.InnerClass.InnerClass">
                    InnerClass.&lt;init&gt;
                </a><div class="methodTOCDescription">Explicit no argument constructor</div></li><li class="method public">
                <a class="methodTOCEntry deprecated" href="#TEST_Gotchas.InnerClass.InnerClass_1">
                    InnerClass.&lt;init&gt;
                </a><div class="methodTOCDescription">Works over multiple lines.</div></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_Gotchas.InnerClass.method2">
                    method2
                </a></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_Gotchas.InnerClass.myMethod">
                    myMethod
                </a><div class="methodTOCDescription">Instance method that implements a method from MyInterface. Because it is declared virtual it can be overridden by a subclass.</div></li></ul>
                <div class="method private"><h2 class="methodHeader " id="TEST_Gotchas.InnerClass.InnerClass">InnerClass.&lt;init&gt;</h2>
            <div class="methodSignature">
                
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L160">
                    <span class="hljs-title">InnerClass</span>()
                        </a>
                      </div>
                      <div class="methodDescription">Explicit no argument constructor</div>
              </div>
              <div class="method public">
                <h2 class="methodHeader deprecated" id="TEST_Gotchas.InnerClass.InnerClass_1">InnerClass.&lt;init&gt;</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L183">
                    public <span class="hljs-title">InnerClass</span>(String s2)
                  </a>
                </div>
                <div class="methodDescription">Works over multiple lines.</div>
                <div class="methodSubTitle deprecated">Deprecated</div>
                <div class="methodSubDescription">Works over multiple lines (deprecated).</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">s2</div>
                <div class="paramDescription">Works over multiple lines.</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription">Works over multiple lines (returns).</div>
                <div class="methodSubTitle ">Exceptions</div>
                <div class="methodSubDescription">Works over multiple lines (exception).</div>
                <div class="methodSubTitle ">Author</div>
                <div class="methodSubDescription">Works over multiple lines (author).</div>
                <div class="methodSubTitle ">Since</div>
                <div class="methodSubDescription">Works over multiple lines (since).</div>
                <div class="methodSubTitle ">Example</div>
                <pre class="codeExample"><code>Works 
over multiple lines.</code></pre>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_Gotchas.InnerClass.method2">method2</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L197">
                    public Integer <span class="hljs-title">method2</span>(Integer i)
                  </a>
                </div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">i</div>
                <div class="paramDescription">Some Param description Implementation of the second interface method above. This method references member variables (with and without the &quot;this&quot; prefix)</div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_Gotchas.InnerClass.myMethod">myMethod</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L190">
                    public virtual void <span class="hljs-title">myMethod</span>()
                  </a>
                </div>
                <div class="methodDescription">Instance method that implements a method from MyInterface. Because it is declared virtual it can be overridden by a subclass.</div>
              </div>
              </div>
            </details>
          </details>
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_Gotchas.MyException">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L252">
                  TEST_Gotchas.MyException
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L252">
                public virtual class MyException extends Exception
              </a>
            </div>
            <div class="classDetails">
              <div class="">Exception inner class</div>
            </div>
            <p />
            <details class="subSection properties" open>
              <summary>
                <h2 class="subsectionTitle properties">Properties</h2>
              </summary>

              <div class="subsectionContainer">
                <table class="attrTable properties">

                  <tr>
                    <th>Name</th>
                    <th>Signature</th>

                    <th>Description</th>
                  </tr>
                  <tr class="property public">
                    <td class="attrName">d</td>
                    <td>
                      <div class="attrSignature">
                        <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L254">
                          public Double <span class="hljs-title">d<span>
                </a></div></td>
                
                <td><div class="attrDescription">Exception class member variable</div></td>
            </tr>
                </table>
            </div>
            <p />
            </details>
            <details class="subSection methods" open>
                <summary><h2 class="subsectionTitle methods">Methods</h2></summary>
                <div class="methodsContainer">
                <ul class="methodTOC"><li class="method protected">
                <a class="methodTOCEntry " href="#TEST_Gotchas.MyException.doIt">
                    doIt
                </a><div class="methodTOCDescription">Exception class method, marked as protected</div></li><li class="method private">
                <a class="methodTOCEntry " href="#TEST_Gotchas.MyException.MyException">
                    MyException.&lt;init&gt;
                </a><div class="methodTOCDescription">Exception class constructor</div></li></ul>
                <div class="method protected"><h2 class="methodHeader " id="TEST_Gotchas.MyException.doIt">doIt</h2>
            <div class="methodSignature">
                
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L262">
                    protected void <span class="hljs-title">doIt</span>()
                        </a>
                      </div>
                      <div class="methodDescription">Exception class method, marked as protected</div>
              </div>
              <div class="method private">
                <h2 class="methodHeader " id="TEST_Gotchas.MyException.MyException">MyException.&lt;init&gt;</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L257">
                    <span class="hljs-title">MyException</span>(Double d)
                  </a>
                </div>
                <div class="methodDescription">Exception class constructor</div>
              </div>
              </div>
            </details>
          </details>
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_Gotchas.MyInterface">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L128">
                  TEST_Gotchas.MyInterface
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L128">
                public virtual interface MyInterface
              </a>
            </div>
            <div class="classDetails">
              <div class="">Inner Interface</div>
            </div>
            <p />
            <details class="subSection methods" open>
              <summary>
                <h2 class="subsectionTitle methods">Methods</h2>
              </summary>
              <div class="methodsContainer">
                <ul class="methodTOC">
                  <li class="method public">
                    <a class="methodTOCEntry " href="#TEST_Gotchas.MyInterface.myMethod">
                      myMethod
                    </a>
                    <div class="methodTOCDescription">No access modifier is necessary for interface methods - these are always public or global depending on the interface visibility</div>
                  </li>
                </ul>
                <div class="method public">
                  <h2 class="methodHeader " id="TEST_Gotchas.MyInterface.myMethod">myMethod</h2>
                  <div class="methodSignature">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L132">
                      void <span class="hljs-title">myMethod</span>()
                    </a>
                  </div>
                  <div class="methodDescription">No access modifier is necessary for interface methods - these are always public or global depending on the interface visibility</div>
                </div>
              </div>
            </details>
          </details>
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_Gotchas.MySecondException">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L266">
                  TEST_Gotchas.MySecondException
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L266">
                public abstract class MySecondException extends Exception implements MyInterface
              </a>
            </div>
            <div class="classDetails">
              <div class="">Exception classes can be abstract and implement interfaces</div>
            </div>
            <p />
          </details>
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_Gotchas.MySecondInterface">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L136">
                  TEST_Gotchas.MySecondInterface
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L136">
                interface MySecondInterface extends MyInterface
              </a>
            </div>
            <div class="classDetails">
              <div class="">Interface extension</div>
            </div>
            <p />
            <details class="subSection methods" open>
              <summary>
                <h2 class="subsectionTitle methods">Methods</h2>
              </summary>
              <div class="methodsContainer">
                <ul class="methodTOC">
                  <li class="method private">
                    <a class="methodTOCEntry " href="#TEST_Gotchas.MySecondInterface.method2">
                      method2
                    </a></li>
                </ul>
                <div class="method private">
                  <h2 class="methodHeader " id="TEST_Gotchas.MySecondInterface.method2">method2</h2>
                  <div class="methodSignature">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_Gotchas.cls#L137">
                      Integer <span class="hljs-title">method2</span>(Integer i)
                    </a>
                  </div>
                </div>
              </div>
            </details>
          </details>
          </div>
        </td>
      </tr>
    </table>
    <hr />
    <center class="footer">
      <a href="https://github.com/no-stack-dub-sack/ApexDoc2-VSCode" target="_blank" rel="noopener noreferrer">
        Powered By ApexDoc2
      </a>
    </center>
  </body>

</html>`;