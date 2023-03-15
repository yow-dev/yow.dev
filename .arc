@app
yow-dev

@static
prune true

@plugins
architect/plugin-lambda-invoker
enhance/arc-plugin-enhance

@events
send-email
  src jobs/events/send-email

@begin
appID C0MV86VZ

@aws
runtime nodejs18.x
