"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2,
  Search,
  Calendar,
  Clock,
  User,
  Star,
  TrendingUp,
  MessageSquare,
  Download,
  Share
} from "lucide-react"

const callsData = [
  {
    id: "8c40dee0-bf47-46a2-9a0e-c01144cfdecf",
    title: "Discovery Call - TechCorp Solutions",
    prospect: "Sarah Johnson",
    duration: "45:32",
    date: "2024-01-15",
    score: 8.5,
    type: "Discovery",
    status: "completed",
    insights: {
      talkRatio: 65,
      questionsAsked: 12,
      objections: 2,
      nextSteps: "Demo scheduled"
    }
  },
  {
    id: "7b39cde1-ae46-35a1-8f1d-b02033beadcf",
    title: "Demo Call - StartupXYZ",
    prospect: "Mike Chen",
    duration: "38:15",
    date: "2024-01-14", 
    score: 9.1,
    type: "Demo",
    status: "completed",
    insights: {
      talkRatio: 58,
      questionsAsked: 8,
      objections: 1,
      nextSteps: "Proposal sent"
    }
  },
  {
    id: "6a28bcd0-9d35-24b0-7e0c-a01922cdabce",
    title: "Follow-up Call - Enterprise Corp",
    prospect: "Jennifer Davis",
    duration: "22:45",
    date: "2024-01-13",
    score: 7.8,
    type: "Follow-up",
    status: "completed",
    insights: {
      talkRatio: 72,
      questionsAsked: 6,
      objections: 0,
      nextSteps: "Contract review"
    }
  }
]

export default function CallsPage() {
  const [selectedCall, setSelectedCall] = useState(callsData[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")

  const filteredCalls = callsData.filter(call => {
    const matchesSearch = call.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         call.prospect.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterType === "all" || call.type.toLowerCase() === filterType.toLowerCase()
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Call Recordings</h1>
        <p className="text-muted-foreground">
          Review and analyze your sales calls with AI-powered insights
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Call List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Call History</CardTitle>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search calls..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="discovery">Discovery</SelectItem>
                  <SelectItem value="demo">Demo</SelectItem>
                  <SelectItem value="follow-up">Follow-up</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {filteredCalls.map((call) => (
              <div
                key={call.id}
                className={`cursor-pointer rounded-lg border p-3 transition-colors hover:bg-accent ${
                  selectedCall.id === call.id ? "border-primary bg-accent" : ""
                }`}
                onClick={() => setSelectedCall(call)}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{call.title}</p>
                      <p className="text-xs text-muted-foreground">{call.prospect}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium">{call.score}/10</div>
                      <Badge variant="outline" className="text-xs">
                        {call.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {call.duration}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {call.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Call Player and Analysis */}
        <div className="lg:col-span-2 space-y-6">
          {/* Call Player */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{selectedCall.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      {selectedCall.prospect}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {selectedCall.date}
                    </span>
                    <Badge variant="outline">{selectedCall.type}</Badge>
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Audio Waveform Placeholder */}
              <div className="h-24 w-full rounded-lg bg-muted flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Audio Waveform Visualization</div>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <Progress value={(currentTime / 2732) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}</span>
                  <span>{selectedCall.duration}</span>
                </div>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center justify-center space-x-4">
                <Button variant="outline" size="sm">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="h-12 w-12 rounded-full"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Button variant="outline" size="sm">
                  <SkipForward className="h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-4 w-4" />
                  <Progress value={75} className="w-20 h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call Analysis Tabs */}
          <Tabs defaultValue="insights" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="moments">Key Moments</TabsTrigger>
              <TabsTrigger value="coaching">Coaching</TabsTrigger>
            </TabsList>

            <TabsContent value="insights" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Talk Ratio</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold">{selectedCall.insights.talkRatio}%</div>
                      <Progress value={selectedCall.insights.talkRatio} className="mt-2 h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium">Questions</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold">{selectedCall.insights.questionsAsked}</div>
                      <p className="text-xs text-muted-foreground mt-1">Asked during call</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-medium">Objections</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold">{selectedCall.insights.objections}</div>
                      <p className="text-xs text-muted-foreground mt-1">Handled successfully</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Score</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold">{selectedCall.score}/10</div>
                      <p className="text-xs text-muted-foreground mt-1">Overall performance</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Call Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium">Next Steps</h4>
                      <p className="text-sm text-muted-foreground">{selectedCall.insights.nextSteps}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Key Topics Discussed</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">Product Demo</Badge>
                        <Badge variant="secondary">Pricing</Badge>
                        <Badge variant="secondary">Implementation</Badge>
                        <Badge variant="secondary">Timeline</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transcript" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Call Transcript</CardTitle>
                  <CardDescription>AI-generated transcript with speaker identification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    <div className="space-y-3">
                      <div className="flex space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">You</div>
                          <p className="text-sm">Hi Sarah, thanks for taking the time to speak with me today. How are things going at TechCorp?</p>
                          <div className="text-xs text-muted-foreground mt-1">0:15</div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                        <div>
                          <div className="text-sm font-medium text-green-600">Sarah Johnson</div>
                          <p className="text-sm">Hi! Things are going well, thanks. We&apos;re actually in the middle of evaluating some new solutions for our sales team.</p>
                          <div className="text-xs text-muted-foreground mt-1">0:25</div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">You</div>
                          <p className="text-sm">That&apos;s perfect timing! Can you tell me more about what challenges you&apos;re facing with your current setup?</p>
                          <div className="text-xs text-muted-foreground mt-1">0:32</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="moments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Key Moments</CardTitle>
                  <CardDescription>Important timestamps and highlights from the call</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { time: "2:15", type: "Question", content: "Great discovery question about current challenges" },
                      { time: "8:42", type: "Objection", content: "Price concern raised - handled well" },
                      { time: "15:30", type: "Interest", content: "Strong buying signal detected" },
                      { time: "22:18", type: "Next Step", content: "Demo scheduled for next week" }
                    ].map((moment, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border">
                        <div className="text-xs font-mono bg-muted px-2 py-1 rounded">{moment.time}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">{moment.type}</Badge>
                          </div>
                          <p className="text-sm mt-1">{moment.content}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="coaching" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>AI Coaching Insights</CardTitle>
                  <CardDescription>Personalized feedback to improve your sales performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">
                      <h4 className="text-sm font-medium text-green-800">What you did well</h4>
                      <ul className="mt-2 text-sm text-green-700 space-y-1">
                        <li>• Excellent discovery questions that uncovered key pain points</li>
                        <li>• Good listening - maintained appropriate talk ratio</li>
                        <li>• Successfully handled pricing objection with value-based response</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">
                      <h4 className="text-sm font-medium text-yellow-800">Areas for improvement</h4>
                      <ul className="mt-2 text-sm text-yellow-700 space-y-1">
                        <li>• Consider asking more qualifying questions about budget</li>
                        <li>• Could have explored decision-making process earlier</li>
                        <li>• Opportunity to create more urgency around timeline</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                      <h4 className="text-sm font-medium text-blue-800">Next steps</h4>
                      <ul className="mt-2 text-sm text-blue-700 space-y-1">
                        <li>• Prepare customized demo focusing on their specific use cases</li>
                        <li>• Send follow-up email with ROI calculator</li>
                        <li>• Schedule follow-up to discuss implementation timeline</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}