module.exports = (robot) => {
  robot.on('push', async context => {
    // Code was pushed to the repo, what should we do with it?
    robot.log(context)
  })
}
