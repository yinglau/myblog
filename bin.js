var cp = require('child_process');
var spawn = cp.spawn;

var hexo = spawn('hexo', ['server', '-a']);
hexo.stdout.on('data', function(d) {
  console.log(d);
});