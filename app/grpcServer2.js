//static code gen
var service = require('../static_codegen/proto/Student_grpc_pb');
var messages = require('../static_codegen/proto/Student_pb');

var grpc = require('grpc');

var server = new grpc.Server();
server.addService(service.StudentServiceService, {
    getRealnameByUsername: getRealnameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentsWrapperByAges: getStudentsWrapperByAges,
    biTalk: biTalk
});

server.bind('localhost:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealnameByUsername(call, callback) {
    console.log("call: " + call.request.getUsername());

    var myResponse = new messages.MyResponse();
    myResponse.setRealname('赵柳')
    callback(null, myResponse);
}
function getStudentsByAge(call, callback) {
}
function getStudentsWrapperByAges(call, callback) {
}
function biTalk(call, callback) {
}