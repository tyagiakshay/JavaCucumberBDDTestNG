$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/amazon.feature");
formatter.feature({
  "name": "amazon",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify user is able to login into Amazon successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "verify user is logged out of Amazon",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonStepDef.verify_user_is_logged_out_of_Amazon()"
});
formatter.result({
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: ca.amazon.StepDef.AmazonStepDef has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public ca.amazon.StepDef.AmazonStepDef(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@49e5f737:1\u003c|\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\r\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n\tat ✽.verify user is logged out of Amazon(features/amazon.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigate to url \"https://www.amazon.ca\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonStepDef.user_navigate_to_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Hello. Sign In Your Account\" is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Hello. Sign In. Your Account\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"SignIn\" button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user SignIn with credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.user_SignIn_with_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Sign Out from Account",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_Sign_Out_from_Account()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify user have the ability to search for an item",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user get Sign In to \"https://www.amazon.ca\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonStepDef.user_get_Sign_In_to(String)"
});
formatter.result({
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: ca.amazon.StepDef.AmazonStepDef has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public ca.amazon.StepDef.AmazonStepDef(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@2d2ffcb7:1\u003c|\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\r\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n\tat ✽.user get Sign In to \"https://www.amazon.ca\"(features/amazon.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user type \"hard hat\" in \"search bar\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonStepDef.user_type_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "search results appear related to \"safety hard hats\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.search_results_appear_related_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify user can lookup review for an product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user get Sign In to \"https://www.amazon.ca\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonStepDef.user_get_Sign_In_to(String)"
});
formatter.result({
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: ca.amazon.StepDef.AmazonStepDef has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public ca.amazon.StepDef.AmazonStepDef(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@15ca7889:1\u003c|\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\r\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n\tat ✽.user get Sign In to \"https://www.amazon.ca\"(features/amazon.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user type \"Ratchet Hard Hat,\" in \"search bar\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonStepDef.user_type_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"ERB 19451 Americana Vent Cap Style Hard Hat with Mega Ratchet, White\" hard hat",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.user_clicks_on_hard_hat(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user lookup customer reviews of product using search criteria \"quality\"",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_lookup_customer_reviews_of_product_using_search_criteria(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will see results filtered by search criteria",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.user_will_see_results_filtered_by_search_criteria()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify user have ability to add item in shopping cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user get Sign In to \"https://www.amazon.ca\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonStepDef.user_get_Sign_In_to(String)"
});
formatter.result({
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: ca.amazon.StepDef.AmazonStepDef has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public ca.amazon.StepDef.AmazonStepDef(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@2f465398:1\u003c|\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\r\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n\tat ✽.user get Sign In to \"https://www.amazon.ca\"(features/amazon.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user type \"safety goggles\" in \"search bar\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonStepDef.user_type_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "search results appear related to \"safety goggles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.search_results_appear_related_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user add \"\" item in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.user_add_item_in_shopping_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify \"\"item is prsent in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.user_verify_item_is_prsent_in_shopping_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify user have is able to delete item from shopping cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user get Sign In to \"https://www.amazon.ca\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonStepDef.user_get_Sign_In_to(String)"
});
formatter.result({
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: ca.amazon.StepDef.AmazonStepDef has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public ca.amazon.StepDef.AmazonStepDef(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@2118cddf:1\u003c|\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\r\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n\tat ✽.user get Sign In to \"https://www.amazon.ca\"(features/amazon.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user type \"fire extinguishers\" in \"search bar\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonStepDef.user_type_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "search results appear related to \"fire extinguishers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.search_results_appear_related_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user add \"\" item in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.user_add_item_in_shopping_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user delete \"\" item from shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDef.user_delete_item_from_shopping_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify item \"\" got deleted from cart successfully",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepDef.user_verify_item_got_deleted_from_cart_successfully(String)"
});
formatter.result({
  "status": "skipped"
});
});