import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Phone, 
  TrendingUp, 
  Clock, 
  Target, 
  PlayCircle, 
  Calendar,
  Users,
  Star
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s your sales training overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Score</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2</div>
            <p className="text-xs text-muted-foreground">
              +0.5 from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Practice Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.5</div>
            <p className="text-xs text-muted-foreground">
              +12% from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Goals Met</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">
              3 of 4 goals completed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Recent Calls */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Recent Calls</CardTitle>
                <CardDescription>
                  Your latest sales call recordings and practice sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: "1",
                    title: "Discovery Call - TechCorp",
                    type: "Real Call",
                    score: 8.5,
                    duration: "45 min",
                    date: "2 hours ago"
                  },
                  {
                    id: "2", 
                    title: "Objection Handling Practice",
                    type: "Practice",
                    score: 7.2,
                    duration: "23 min",
                    date: "1 day ago"
                  },
                  {
                    id: "3",
                    title: "Demo Call - StartupXYZ", 
                    type: "Real Call",
                    score: 9.1,
                    duration: "38 min",
                    date: "2 days ago"
                  }
                ].map((call) => (
                  <div key={call.id} className="flex items-center justify-between space-x-4 rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <PlayCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{call.title}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant={call.type === "Real Call" ? "default" : "secondary"}>
                            {call.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{call.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{call.score}/10</div>
                      <div className="text-xs text-muted-foreground">{call.date}</div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Calls
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Start practicing or review your progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Start Practice Session
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Call Review
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  Team Performance
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Skill Breakdown</CardTitle>
                <CardDescription>Your performance across different sales skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { skill: "Discovery Questions", score: 85 },
                  { skill: "Objection Handling", score: 72 },
                  { skill: "Product Demo", score: 91 },
                  { skill: "Closing Techniques", score: 68 },
                  { skill: "Rapport Building", score: 88 }
                ].map((item) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">{item.skill}</div>
                      <div className="text-sm text-muted-foreground">{item.score}%</div>
                    </div>
                    <Progress value={item.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Trend</CardTitle>
                <CardDescription>Your performance over the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">+12% improvement</span>
                </div>
                <div className="mt-4 text-2xl font-bold">8.2/10</div>
                <p className="text-xs text-muted-foreground">Average score this week</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Goals</CardTitle>
                <CardDescription>Track your progress towards sales targets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { goal: "Complete 10 practice sessions", current: 7, target: 10 },
                  { goal: "Achieve 8.5 average score", current: 8.2, target: 8.5 },
                  { goal: "Master objection handling", current: 72, target: 85 },
                  { goal: "Conduct 5 real calls", current: 3, target: 5 }
                ].map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">{goal.goal}</div>
                      <div className="text-sm text-muted-foreground">
                        {goal.current}/{goal.target}
                      </div>
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
