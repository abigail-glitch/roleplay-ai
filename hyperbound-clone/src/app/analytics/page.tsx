import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  TrendingUp, 
  TrendingDown,
  BarChart3, 
  Clock, 
  Target, 
  Star,
  Phone,
  Award
} from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Track your sales performance and identify areas for improvement
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Calls</p>
                <p className="text-3xl font-bold">247</p>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500">+12%</span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </div>
              <Phone className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Score</p>
                <p className="text-3xl font-bold">8.4</p>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500">+0.3</span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </div>
              <Star className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Practice Hours</p>
                <p className="text-3xl font-bold">42.5</p>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingDown className="h-4 w-4 text-red-500" />
                  <span className="text-red-500">-5%</span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </div>
              <Clock className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Win Rate</p>
                <p className="text-3xl font-bold">73%</p>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500">+8%</span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </div>
              <Target className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="comparisons">Comparisons</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Performance Chart Placeholder */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Performance Over Time</CardTitle>
                <CardDescription>Your sales call scores and practice session results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full rounded-lg bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Performance Chart Visualization</p>
                    <p className="text-sm text-muted-foreground">Shows score trends over the last 30 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Call Type Breakdown</CardTitle>
                <CardDescription>Distribution of your call types</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Discovery Calls</span>
                    </div>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Demo Calls</span>
                    </div>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Follow-up Calls</span>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your latest milestones and improvements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Discovery Master</p>
                    <p className="text-xs text-muted-foreground">Achieved 90%+ on 5 discovery calls</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Objection Handler</p>
                    <p className="text-xs text-muted-foreground">Successfully handled 20 objections</p>
                    <p className="text-xs text-muted-foreground">1 week ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Practice Streak</p>
                    <p className="text-xs text-muted-foreground">7 days of consistent practice</p>
                    <p className="text-xs text-muted-foreground">Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Skill Ratings</CardTitle>
                <CardDescription>Your performance across different sales skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { skill: "Discovery Questions", score: 8.9, trend: "up", change: "+0.4" },
                  { skill: "Objection Handling", score: 7.2, trend: "up", change: "+0.8" },
                  { skill: "Product Demo", score: 9.1, trend: "stable", change: "0.0" },
                  { skill: "Closing Techniques", score: 6.8, trend: "down", change: "-0.2" },
                  { skill: "Rapport Building", score: 8.8, trend: "up", change: "+0.3" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{item.score}/10</span>
                          <div className={`flex items-center text-xs ${
                            item.trend === 'up' ? 'text-green-500' : 
                            item.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'
                          }`}>
                            {item.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1" />}
                            {item.trend === 'down' && <TrendingDown className="h-3 w-3 mr-1" />}
                            {item.change}
                          </div>
                        </div>
                      </div>
                      <Progress value={item.score * 10} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Improvement Opportunities</CardTitle>
                <CardDescription>Areas where you can focus to improve</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-red-50 border-l-4 border-red-500">
                    <h4 className="text-sm font-medium text-red-800">Closing Techniques</h4>
                    <p className="text-xs text-red-700 mt-1">
                      Score decreased by 0.2 points. Focus on asking for the sale more confidently.
                    </p>
                    <Badge variant="destructive" className="mt-2 text-xs">Priority: High</Badge>
                  </div>

                  <div className="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">
                    <h4 className="text-sm font-medium text-yellow-800">Objection Handling</h4>
                    <p className="text-xs text-yellow-700 mt-1">
                      Good improvement but still below target. Practice more advanced scenarios.
                    </p>
                    <Badge variant="secondary" className="mt-2 text-xs">Priority: Medium</Badge>
                  </div>

                  <div className="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">
                    <h4 className="text-sm font-medium text-green-800">Discovery Questions</h4>
                    <p className="text-xs text-green-700 mt-1">
                      Excellent progress! Maintain this level with regular practice.
                    </p>
                    <Badge variant="outline" className="mt-2 text-xs">Priority: Low</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>30-Day Trend Analysis</CardTitle>
                <CardDescription>Your performance trends over the last month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">+15%</div>
                    <div className="text-sm text-muted-foreground">Call Volume</div>
                    <div className="text-xs text-muted-foreground mt-1">vs previous month</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">+0.6</div>
                    <div className="text-sm text-muted-foreground">Average Score</div>
                    <div className="text-xs text-muted-foreground mt-1">points improvement</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-500">+8%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                    <div className="text-xs text-muted-foreground mt-1">conversion improvement</div>
                  </div>
                </div>

                <div className="mt-6 h-64 w-full rounded-lg bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Trend Analysis Chart</p>
                    <p className="text-sm text-muted-foreground">Performance trends over time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparisons" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Team Comparison</CardTitle>
                <CardDescription>How you stack up against your team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">#3</div>
                  <div className="text-sm text-blue-600">Your Rank</div>
                  <div className="text-xs text-muted-foreground">out of 12 team members</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Average Score</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">8.4</span>
                      <span className="text-muted-foreground">(Team: 7.8)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>Call Volume</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">247</span>
                      <span className="text-muted-foreground">(Team: 189)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>Win Rate</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">73%</span>
                      <span className="text-muted-foreground">(Team: 68%)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Benchmarks</CardTitle>
                <CardDescription>Compare against industry standards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { metric: "Discovery Score", your: 8.9, benchmark: 7.5, status: "above" },
                  { metric: "Demo Score", your: 9.1, benchmark: 8.2, status: "above" },
                  { metric: "Closing Score", your: 6.8, benchmark: 7.8, status: "below" },
                  { metric: "Overall Score", your: 8.4, benchmark: 7.8, status: "above" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{item.metric}</span>
                      <div className="flex items-center space-x-2">
                        <span className={item.status === 'above' ? 'text-green-600' : 'text-red-600'}>
                          {item.your}
                        </span>
                        <span className="text-muted-foreground">vs {item.benchmark}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex-1">
                        <Progress value={(item.your / 10) * 100} className="h-2" />
                      </div>
                      <div className="text-xs text-muted-foreground w-12">
                        {item.status === 'above' ? '+' : ''}{(item.your - item.benchmark).toFixed(1)}
                      </div>
                    </div>
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