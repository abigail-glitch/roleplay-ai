"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  PlayCircle, 
  Clock, 
  Target, 
  Star, 
  Trophy,
  BookOpen,
  Zap
} from "lucide-react"

const practiceScenarios = [
  {
    id: 1,
    title: "Discovery Call Mastery",
    description: "Practice asking the right questions to uncover customer pain points",
    difficulty: "Beginner",
    duration: "15-20 min",
    category: "Discovery",
    rating: 4.8,
    completions: 1247,
    skills: ["Question Techniques", "Active Listening", "Pain Point Discovery"]
  },
  {
    id: 2,
    title: "Objection Handling Challenge",
    description: "Handle common sales objections with confidence and skill",
    difficulty: "Intermediate",
    duration: "20-25 min", 
    category: "Objection Handling",
    rating: 4.9,
    completions: 892,
    skills: ["Objection Handling", "Persuasion", "Value Communication"]
  },
  {
    id: 3,
    title: "Product Demo Excellence",
    description: "Deliver compelling product demonstrations that convert",
    difficulty: "Advanced",
    duration: "30-35 min",
    category: "Demo",
    rating: 4.7,
    completions: 634,
    skills: ["Product Knowledge", "Storytelling", "Feature-Benefit Selling"]
  },
  {
    id: 4,
    title: "Closing Techniques Workshop",
    description: "Master various closing techniques and know when to use them",
    difficulty: "Advanced",
    duration: "25-30 min",
    category: "Closing",
    rating: 4.6,
    completions: 523,
    skills: ["Closing Techniques", "Negotiation", "Decision Making"]
  }
]

const recentSessions = [
  {
    id: 1,
    scenario: "Discovery Call Mastery",
    score: 8.2,
    date: "2 hours ago",
    duration: "18 min",
    improvements: ["Better follow-up questions", "More active listening"]
  },
  {
    id: 2,
    scenario: "Objection Handling Challenge", 
    score: 7.5,
    date: "1 day ago",
    duration: "22 min",
    improvements: ["Stronger value proposition", "More empathy in responses"]
  },
  {
    id: 3,
    scenario: "Product Demo Excellence",
    score: 9.1,
    date: "3 days ago", 
    duration: "32 min",
    improvements: ["Excellent storytelling", "Great feature-benefit connection"]
  }
]

export default function PracticePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredScenarios = practiceScenarios.filter(scenario => 
    selectedCategory === "all" || scenario.category.toLowerCase() === selectedCategory.toLowerCase()
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Practice Sessions</h1>
        <p className="text-muted-foreground">
          Improve your sales skills with AI-powered practice scenarios
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <PlayCircle className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Sessions Completed</span>
            </div>
            <div className="mt-2 text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+5 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Practice Time</span>
            </div>
            <div className="mt-2 text-2xl font-bold">23.5h</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">Avg Score</span>
            </div>
            <div className="mt-2 text-2xl font-bold">8.3</div>
            <p className="text-xs text-muted-foreground">+0.4 improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">Rank</span>
            </div>
            <div className="mt-2 text-2xl font-bold">#12</div>
            <p className="text-xs text-muted-foreground">In your team</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="scenarios" className="space-y-6">
        <TabsList>
          <TabsTrigger value="scenarios">Practice Scenarios</TabsTrigger>
          <TabsTrigger value="recent">Recent Sessions</TabsTrigger>
          <TabsTrigger value="skills">Skill Development</TabsTrigger>
        </TabsList>

        <TabsContent value="scenarios" className="space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              All Scenarios
            </Button>
            <Button
              variant={selectedCategory === "discovery" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("discovery")}
            >
              Discovery
            </Button>
            <Button
              variant={selectedCategory === "objection handling" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("objection handling")}
            >
              Objection Handling
            </Button>
            <Button
              variant={selectedCategory === "demo" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("demo")}
            >
              Demo
            </Button>
            <Button
              variant={selectedCategory === "closing" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("closing")}
            >
              Closing
            </Button>
          </div>

          {/* Scenario Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredScenarios.map((scenario) => (
              <Card key={scenario.id} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{scenario.title}</CardTitle>
                      <CardDescription>{scenario.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{scenario.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {scenario.duration}
                      </span>
                      <span className="flex items-center">
                        <Target className="mr-1 h-4 w-4" />
                        {scenario.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{scenario.rating}</span>
                      <span className="text-muted-foreground">({scenario.completions})</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Skills you&apos;ll practice:</p>
                    <div className="flex flex-wrap gap-1">
                      {scenario.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Start Practice
                    </Button>
                    <Button variant="outline" size="icon">
                      <BookOpen className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Practice Sessions</CardTitle>
              <CardDescription>Your latest practice sessions and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="space-y-1">
                      <p className="font-medium">{session.scenario}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{session.date}</span>
                        <span>•</span>
                        <span>{session.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {session.improvements.map((improvement, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {improvement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{session.score}</div>
                      <div className="text-sm text-muted-foreground">Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Skill Progress</CardTitle>
                <CardDescription>Track your improvement across different sales skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { skill: "Discovery Questions", level: 85, target: 90 },
                  { skill: "Objection Handling", level: 72, target: 80 },
                  { skill: "Product Demos", level: 91, target: 95 },
                  { skill: "Closing Techniques", level: 68, target: 75 },
                  { skill: "Rapport Building", level: 88, target: 90 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.level}% / {item.target}%
                      </span>
                    </div>
                    <Progress value={item.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Practice</CardTitle>
                <CardDescription>AI-suggested scenarios based on your performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                    <Zap className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Focus on Objection Handling</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your objection handling score is below target. Practice 2-3 more sessions this week.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border-l-4 border-green-500">
                    <Target className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Closing Technique Improvement</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Try the advanced closing scenarios to reach your 75% target.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Maintain Demo Excellence</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Great work on demos! Practice once weekly to maintain your 91% score.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}