
<h1>AirBnB clone - Web dynamic</h1>
<div>
<div>
<h3>Concepts</h3>
</div>
<div>
<p><em>For this project, we expect you to look at this concept:</em></p>
<ul>
<li><a href="https://intranet.hbtn.io/concepts/865">AirBnB clone</a></li>
</ul>
</div>
</div>
<div>
<div>
<h2>Resources</h2>
<p><strong>Read or watch</strong>:</p>
<ul>
<li><a title="Selector" href="https://intranet.hbtn.io/rltoken/Jmbg6KcxvbKHIa5xsQV46g" target="_blank" rel="noopener">Selector</a></li>
<li><a title="Get and set content" href="https://intranet.hbtn.io/rltoken/2mRqt8u3Z3y1oKC241-aMg" target="_blank" rel="noopener">Get and set content</a></li>
<li><a title="Manipulate CSS classes" href="https://intranet.hbtn.io/rltoken/ME0IoUyUCIIHBBVF-DIx7w" target="_blank" rel="noopener">Manipulate CSS classes</a></li>
<li><a title="Manipulate DOM elements" href="https://intranet.hbtn.io/rltoken/PMB_KGhPNGBGK0Jy-IFR0w" target="_blank" rel="noopener">Manipulate DOM elements</a></li>
<li><a title="Document ready" href="https://intranet.hbtn.io/rltoken/lHvOay7jV5SY4zXx0NrTNA" target="_blank" rel="noopener">Document ready</a></li>
<li><a title="Introduction" href="https://intranet.hbtn.io/rltoken/di4Rszp8KfAOVmcUeAPtMA" target="_blank" rel="noopener">Introduction</a></li>
<li><a title="GET &amp; POST request" href="https://intranet.hbtn.io/rltoken/ezQpW3sxDwFFOfUNTXuaaw" target="_blank" rel="noopener">GET &amp; POST request</a></li>
<li><a title="HTTP access control (CORS)" href="https://intranet.hbtn.io/rltoken/3c_POD0uqzfYwzSODdURww" target="_blank" rel="noopener">HTTP access control (CORS)</a></li>
</ul>
<h2>Learning Objectives</h2>
<p>At the end of this project, you are expected to be able to <a title="explain to anyone" href="https://intranet.hbtn.io/rltoken/x4ZVwAvxdN7f6ZwP4hPoRQ" target="_blank" rel="noopener">explain to anyone</a>, <strong>without the help of Google</strong>:</p>
<h3>General</h3>
<ul>
<li>How cool it is to request your own API</li>
<li>How to modify an HTML element style</li>
<li>How to get and update an HTML element content</li>
<li>How to modify the DOM</li>
<li>How to make a <code>GET</code> request with JQuery Ajax</li>
<li>How to make a <code>POST</code> request with JQuery Ajax</li>
<li>How to listen/bind to DOM events</li>
<li>How to listen/bind to user events</li>
</ul>
<h2>Requirements</h2>
<h3>General</h3>
<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code></li>
<li>All your files will be interpreted on Chrome (version 57.0)</li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should be <code>semistandard</code> compliant with the flag <code>--global $</code>: <code>semistandard *.js --global $</code></li>
<li>All your JavaScript must be in the folder <code>scripts</code></li>
<li>You must use JQuery version 3.x</li>
<li>You are not allowed to use <code>var</code></li>
<li>HTML should not reload for each action: DOM manipulation, update values, fetch data&hellip;</li>
</ul>
<h3>GitHub</h3>
<p><strong>There should be one project repository per group. If you clone/fork/whatever a project repository with the same name before the second deadline, you risk a 0% score.</strong></p>
<h2>More Info</h2>
<h3>Import JQuery</h3>
<pre><code>&lt;head&gt;
 &lt;script src="https://code.jquery.com/jquery-3.2.1.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>
<h3>Before starting the project&hellip;</h3>
<p>You will work on a codebase using <a title="Flasgger" href="https://intranet.hbtn.io/rltoken/TC9ahZWJWQmSl3XVRKsEZg" target="_blank" rel="noopener">Flasgger</a>, you will need to install it locally first before starting the RestAPI:</p>
<pre><code>$ sudo apt-get install -y python3-lxml
$ sudo pip3 install flask_cors # if it was not installed yet
$ sudo pip3 install flasgger
</code></pre>
<p>If the RestAPI is not starting, please read the error message. Based on the(ses) error message(s), you will have to troubleshoot potential dependencies issues.</p>
<p>Here some solutions:</p>
<h4><code>jsonschema</code> exception</h4>
<pre><code>$ sudo pip3 uninstall -y jsonschema
$ sudo pip3 install jsonschema==3.0.1
</code></pre>
<h4><code>No module named 'pathlib2'</code></h4>
<pre><code>$ sudo pip3 install pathlib2
</code></pre>
<h3>Expose ports from your Vagrant</h3>
<p>In your <code>Vagrantfile</code>, add this line for each port forwarded</p>
<pre><code># I expose the port 5001 of my vm to the port 5001 on my computer
config.vm.network :forwarded_port, guest: 5001, host: 5001
</code></pre>
<p>if you need to expose other ports, same line but you will need to replace the &ldquo;guest port&rdquo; (inside your vagrant) and your &ldquo;host port&rdquo; (outside your vagrant, used from your browser for example)</p>
<p>It&rsquo;s important in your project, to use the AirBnB API with the port <code>5001</code></p>
<p><br /><br /><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/concepts/74/hbnb_step5.png" alt="" /></p>
<h3>Manual QA Review</h3>
<p><strong>It is your responsibility to request a review for this project from a peer before the project&rsquo;s deadline. If no peers have been reviewed, you should request a review from a TA or staff member.</strong></p>
</div>
</div>
