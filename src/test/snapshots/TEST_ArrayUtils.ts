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
              <h2 class="sectionTitle" id="TEST_ArrayUtils">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L24">
                  TEST_ArrayUtils
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L24">
                global class TEST_ArrayUtils
              </a>
            </div>
            <div class="classDetails">
              <div class="">The apex-lang <code class="inlineCode">ArrayUtils</code> utility class for Apex. The classes in this group have been randomly gathered from various resources simply to demonstrate ApexDoc2-VSCode&#39;s multi-source directory feature aimed at Salesforce-DX projects which may have a <code class="inlineCode">main</code> folder and multipke feature directories. <br><br> This code is part of the &#39;apex-lang&#39; open source project avaiable at: http://code.google.com/p/apex-lang/. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0.</div>
              <div class="classSubtitle ">See</div>
              <div class="classSubDescription"><a target="_blank" rel="noopener noreferrer" href="http://code.google.com/p/apex-lang/">Source</a>, <a target="_blank" rel="noopener noreferrer" href="http://www.apache.org/licenses/LICENSE-2.0">License</a></div><br />Richard Vanhook<br />Dec 28, 2008
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


                  </tr>
                  <tr class="property global">
                    <td class="attrName">EMPTY_STRING_ARRAY</td>
                    <td>
                      <div class="attrSignature">
                        <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L26">
                          global static String[] <span class="hljs-title">EMPTY_STRING_ARRAY<span>
                </a></div></td>
                
                
            </tr>
            <tr class="property global">
                <td class="attrName">MAX_NUMBER_OF_ELEMENTS_IN_LIST</td>
                <td><div class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L27">
                    global static Integer <span class="hljs-title">MAX_NUMBER_OF_ELEMENTS_IN_LIST<span>
                </a></div></td>
                
                
            </tr>
                </table>
            </div>
            <p />
            </details>
            <details class="subSection methods" open>
                <summary><h2 class="subsectionTitle methods">Methods</h2></summary>
                <div class="methodsContainer">
                <ul class="methodTOC"><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.assertArraysAreEqual">
                    assertArraysAreEqual
                </a><div class="methodTOCDescription">Assert that two arrays do not have equal elements</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.assertArraysAreEqual_1">
                    assertArraysAreEqual
                </a><div class="methodTOCDescription">Assert that two arrays do not have equal elements</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.isEmpty">
                    isEmpty
                </a><div class="methodTOCDescription">Returns <code class="inlineCode">true</code> if a given array is empty</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.isEmpty_1">
                    isEmpty
                </a><div class="methodTOCDescription">Returns <code class="inlineCode">true</code> if a given array is empty</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.isNotEmpty">
                    isNotEmpty
                </a><div class="methodTOCDescription">Returns <code class="inlineCode">true</code> if a given array is NOT empty</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.isNotEmpty_1">
                    isNotEmpty
                </a><div class="methodTOCDescription">Returns <code class="inlineCode">true</code> if a given array is NOT empty</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.lowerCase">
                    lowerCase
                </a><div class="methodTOCDescription">Lowercase each item of a string array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.merg">
                    merg
                </a><div class="methodTOCDescription">Merge two lists</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.merg_1">
                    merg
                </a><div class="methodTOCDescription">Merge two lists</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.mergex">
                    mergex
                </a><div class="methodTOCDescription">Merge the elements of two arrays into a single array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.mergex_1">
                    mergex
                </a><div class="methodTOCDescription">An overload for <code class="inlineCode">mergex</code> which handles SObjects.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.objectToString">
                    objectToString
                </a><div class="methodTOCDescription">Cast a list of objects as strings and return the list.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.pluck">
                    pluck
                </a><div class="methodTOCDescription">Iterate over an SObject array, plucking out a given field, and returning each plucked element in an array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.qsort">
                    qsort
                </a><div class="methodTOCDescription">Quicksort implementation for a list of primitive Objects.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.qsort_1">
                    qsort
                </a><div class="methodTOCDescription">Quicksort implementation for a list of primitive Objects.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.qsort_2">
                    qsort
                </a><div class="methodTOCDescription">Quicksort implementation for a list of Objects.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.qsort_3">
                    qsort
                </a><div class="methodTOCDescription">Quicksort implementation for a list of Objects.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.qsort_4">
                    qsort
                </a><div class="methodTOCDescription">Quicksort implementation for a list of SObjects.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.qsort_5">
                    qsort
                </a><div class="methodTOCDescription">Quicksort implementation for a list of SObjects.</div></li><li class="method private">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.qsort_6">
                    qsort
                </a><div class="methodTOCDescription">Private helper method</div></li><li class="method private">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.qsort_7">
                    qsort
                </a><div class="methodTOCDescription">Private helper method</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.reverse">
                    reverse
                </a><div class="methodTOCDescription">Reverse an array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.reverse_1">
                    reverse
                </a><div class="methodTOCDescription">Reverse an array of SObjects.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.subset">
                    subset
                </a><div class="methodTOCDescription">Return a subset of an array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.subset_1">
                    subset
                </a><div class="methodTOCDescription">Return a subset of an array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.subset_2">
                    subset
                </a><div class="methodTOCDescription">Return a subset of an array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.subset_3">
                    subset
                </a><div class="methodTOCDescription">Return a subset of an array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.toString">
                    toString
                </a><div class="methodTOCDescription">Stringify an array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.toString_1">
                    toString
                </a><div class="methodTOCDescription">Stringify an array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.trim">
                    trim
                </a><div class="methodTOCDescription">Trim each element of a string array.</div></li><li class="method global">
                <a class="methodTOCEntry " href="#TEST_ArrayUtils.upperCase">
                    upperCase
                </a><div class="methodTOCDescription">Uppercase each item of a string array.</div></li></ul>
                <div class="method global"><h2 class="methodHeader " id="TEST_ArrayUtils.assertArraysAreEqual">assertArraysAreEqual</h2>
            <div class="methodSignature">
                
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L261">
                    global static void <span class="hljs-title">assertArraysAreEqual</span>(Object[] expected, Object[] actual)
                        </a>
                      </div>
                      <div class="methodDescription">Assert that two arrays do not have equal elements</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.assertArraysAreEqual_1">assertArraysAreEqual</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L277">
                    global static void <span class="hljs-title">assertArraysAreEqual</span>(SObject[] expected, SObject[] actual)
                  </a>
                </div>
                <div class="methodDescription">Assert that two arrays do not have equal elements</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.isEmpty">isEmpty</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L182">
                    global static Boolean <span class="hljs-title">isEmpty</span>(Object[] objectArray)
                  </a>
                </div>
                <div class="methodDescription">Returns <code class="inlineCode">true</code> if a given array is empty</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.isEmpty_1">isEmpty</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L190">
                    global static Boolean <span class="hljs-title">isEmpty</span>(SObject[] objectArray)
                  </a>
                </div>
                <div class="methodDescription">Returns <code class="inlineCode">true</code> if a given array is empty</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.isNotEmpty">isNotEmpty</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L198">
                    global static Boolean <span class="hljs-title">isNotEmpty</span>(Object[] objectArray)
                  </a>
                </div>
                <div class="methodDescription">Returns <code class="inlineCode">true</code> if a given array is NOT empty</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.isNotEmpty_1">isNotEmpty</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L203">
                    global static Boolean <span class="hljs-title">isNotEmpty</span>(SObject[] objectArray)
                  </a>
                </div>
                <div class="methodDescription">Returns <code class="inlineCode">true</code> if a given array is NOT empty</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.lowerCase">lowerCase</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L98">
                    global static List&lt;String&gt; <span class="hljs-title">lowerCase</span>(List&lt;String&gt; strs)
                  </a>
                </div>
                <div class="methodDescription">Lowercase each item of a string array.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">strs</div>
                <div class="paramDescription">A list of strings to convert to lowercase</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription">The list of lowercased strings.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.merg">merg</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L293">
                    global static List&lt;Object&gt; <span class="hljs-title">merg</span>(List&lt;Object&gt; list1, List&lt;Object&gt; list2)
                  </a>
                </div>
                <div class="methodDescription">Merge two lists</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.merg_1">merg</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L312">
                    global static List&lt;SObject&gt; <span class="hljs-title">merg</span>(List&lt;SObject&gt; list1, List&lt;SObject&gt; list2)
                  </a>
                </div>
                <div class="methodDescription">Merge two lists</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.mergex">mergex</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L154">
                    global static Object[] <span class="hljs-title">mergex</span>(Object[] array1, Object[] array2)
                  </a>
                </div>
                <div class="methodDescription">Merge the elements of two arrays into a single array.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">array1</div>
                <div class="paramDescription">The elements of this array will be first in the resulting array.</div>
                <div class="paramName">array2</div>
                <div class="paramDescription">The elements of this array will come after the elements of <code class="inlineCode">array1</code> in the resulting array.</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription">The merged array.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.mergex_1">mergex</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L171">
                    global static SObject[] <span class="hljs-title">mergex</span>(SObject[] array1, SObject[] array2)
                  </a>
                </div>
                <div class="methodDescription">An overload for <code class="inlineCode">mergex</code> which handles SObjects.</div>
                <div class="methodSubTitle ">See</div>
                <div class="methodSubDescription"><a href="javascript:void(0)" onclick="goToLocation('TEST_ArrayUtils.html#TEST_ArrayUtils.mergex')">TEST_ArrayUtils.mergex</a></div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.objectToString">objectToString</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L34">
                    global static List&lt;String&gt; <span class="hljs-title">objectToString</span>(List&lt;Object&gt; objects)
                  </a>
                </div>
                <div class="methodDescription">Cast a list of objects as strings and return the list.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">objects</div>
                <div class="paramDescription">A list of objects to cast</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription">Returns a <code class="inlineCode">List&lt;String&gt;</code> of casted objects</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.pluck">pluck</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L213">
                    global static Object[] <span class="hljs-title">pluck</span>(SObject[] objectArray, String fieldName)
                  </a>
                </div>
                <div class="methodDescription">Iterate over an SObject array, plucking out a given field, and returning each plucked element in an array.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">objectArray</div>
                <div class="paramDescription">An array of SObjects</div>
                <div class="paramName">fieldName</div>
                <div class="paramDescription">The field name to pluck.</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription">An <code class="inlineCode">object</code> array continaing the plucked elements.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.qsort">qsort</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L387">
                    global static List&lt;Object&gt; <span class="hljs-title">qsort</span>(List&lt;Object&gt; theList)
                  </a>
                </div>
                <div class="methodDescription">Quicksort implementation for a list of primitive Objects.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.qsort_1">qsort</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L394">
                    global static List&lt;Object&gt; <span class="hljs-title">qsort</span>(List&lt;Object&gt; theList, Boolean sortAsc)
                  </a>
                </div>
                <div class="methodDescription">Quicksort implementation for a list of primitive Objects.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.qsort_2">qsort</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L402">
                    global static List&lt;Object&gt; <span class="hljs-title">qsort</span>(List&lt;Object&gt; theList, IObjectComparatr comparator)
                  </a>
                </div>
                <div class="methodDescription">Quicksort implementation for a list of Objects.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.qsort_3">qsort</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L409">
                    global static List&lt;Object&gt; <span class="hljs-title">qsort</span>(List&lt;Object&gt; theList, IObjectComparatr comparator, Boolean sortAsc)
                  </a>
                </div>
                <div class="methodDescription">Quicksort implementation for a list of Objects.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.qsort_4">qsort</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L418">
                    global static List&lt;SObject&gt; <span class="hljs-title">qsort</span>(List&lt;SObject&gt; theList, ISObjectComparator comparator)
                  </a>
                </div>
                <div class="methodDescription">Quicksort implementation for a list of SObjects.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.qsort_5">qsort</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L425">
                    global static List&lt;SObject&gt; <span class="hljs-title">qsort</span>(List&lt;SObject&gt; theList, ISObjectComparator comparator,Boolean sortAsc )
                  </a>
                </div>
                <div class="methodDescription">Quicksort implementation for a list of SObjects.</div>
              </div>
              <div class="method private">
                <h2 class="methodHeader " id="TEST_ArrayUtils.qsort_6">qsort</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L430">
                    private static List&lt;Object&gt; <span class="hljs-title">qsort</span>(List&lt;Object&gt; theList, Integer lo0, Integer hi0, IObjectComparatr comparator, Boolean sortAsc)
                  </a>
                </div>
                <div class="methodDescription">Private helper method</div>
              </div>
              <div class="method private">
                <h2 class="methodHeader " id="TEST_ArrayUtils.qsort_7">qsort</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L480">
                    private static List&lt;SObject&gt; <span class="hljs-title">qsort</span>(List&lt;SObject&gt; theList, Integer lo0, Integer hi0, ISObjectComparator comparator, Boolean sortAsc)
                  </a>
                </div>
                <div class="methodDescription">Private helper method</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.reverse">reverse</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L54">
                    global static Object[] <span class="hljs-title">reverse</span>(Object[] anArray)
                  </a>
                </div>
                <div class="methodDescription">Reverse an array.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">anArray</div>
                <div class="paramDescription">The array to reverse</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription">The reversed array.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.reverse_1">reverse</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L76">
                    global static SObject[] <span class="hljs-title">reverse</span>(SObject[] anArray)
                  </a>
                </div>
                <div class="methodDescription">Reverse an array of SObjects.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">anArray</div>
                <div class="paramDescription">The array to reverse</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription">The reversed array.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.subset">subset</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L339">
                    global static List&lt;Object&gt; <span class="hljs-title">subset</span>(List&lt;Object&gt; aList, Integer count)
                  </a>
                </div>
                <div class="methodDescription">Return a subset of an array.</div>
                <div class="methodSubTitle ">See</div>
                <div class="methodSubDescription"><a href="javascript:void(0)" onclick="goToLocation('TEST_ArrayUtils.html#TEST_ArrayUtils.subset_1')">TEST_ArrayUtils.subset</a>, <a href="javascript:void(0)" onclick="goToLocation('TEST_ArrayUtils.html#TEST_ArrayUtils.subset_2')">TEST_ArrayUtils.subset</a>, <a href="javascript:void(0)" onclick="goToLocation('TEST_ArrayUtils.html#TEST_ArrayUtils.subset_3')">TEST_ArrayUtils.subset</a></div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.subset_1">subset</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L346">
                    global static List&lt;Object&gt; <span class="hljs-title">subset</span>(List&lt;Object&gt; list1, Integer startIndex, Integer count)
                  </a>
                </div>
                <div class="methodDescription">Return a subset of an array.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.subset_2">subset</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L359">
                    global static List&lt;SObject&gt; <span class="hljs-title">subset</span>(List&lt;SObject&gt; aList, Integer count)
                  </a>
                </div>
                <div class="methodDescription">Return a subset of an array.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.subset_3">subset</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L366">
                    global static List&lt;SObject&gt; <span class="hljs-title">subset</span>(List&lt;SObject&gt; list1, Integer startIndex, Integer count)
                  </a>
                </div>
                <div class="methodDescription">Return a subset of an array.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.toString">toString</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L229">
                    global static String <span class="hljs-title">toString</span>(Object[] objectArray)
                  </a>
                </div>
                <div class="methodDescription">Stringify an array.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">objectArray</div>
                <div class="paramDescription">The array to stringigy.</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription"><code class="inlineCode">String</code></div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.toString_1">toString</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L247">
                    global static String <span class="hljs-title">toString</span>(SObject[] objectArray)
                  </a>
                </div>
                <div class="methodDescription">Stringify an array.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">objectArray</div>
                <div class="paramDescription">The array to stringigy.</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription"><code class="inlineCode">String</code></div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.trim">trim</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L134">
                    global static List&lt;String&gt; <span class="hljs-title">trim</span>(List&lt;String&gt; strs)
                  </a>
                </div>
                <div class="methodDescription">Trim each element of a string array.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">strs</div>
                <div class="paramDescription">The list of strings to trim.</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription">The list of trimmed strings.</div>
              </div>
              <div class="method global">
                <h2 class="methodHeader " id="TEST_ArrayUtils.upperCase">upperCase</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_ArrayUtils.cls#L116">
                    global static List&lt;String&gt; <span class="hljs-title">upperCase</span>(List&lt;String&gt; strs)
                  </a>
                </div>
                <div class="methodDescription">Uppercase each item of a string array.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">strs</div>
                <div class="paramDescription">A list of strings to convert to uppercase</div>
                <div class="methodSubTitle ">Returns</div>
                <div class="methodSubDescription">The list of uppercased strings.</div>
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