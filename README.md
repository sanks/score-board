## Classes

<dl>
<dt><a href="#Match">Match</a></dt>
<dd></dd>
<dt><a href="#ScoreBoard">ScoreBoard</a></dt>
<dd></dd>
</dl>

<a name="Match"></a>

## Match
**Kind**: global class  

* [Match](#Match)
    * [new Match(homeTeam, awayTeam)](#new_Match_new)
    * _instance_
        * [.id](#Match+id) ⇒ <code>string</code>
        * [.totalScore](#Match+totalScore) ⇒ <code>number</code>
        * [.setScore(homeTeamScore, awayTeamScore)](#Match+setScore)
    * _static_
        * [.getId(homeTeam, awayTeam)](#Match.getId) ⇒ <code>string</code>
        * [.validateTeams(homeTeam, awayTeam)](#Match.validateTeams)

<a name="new_Match_new"></a>

### new Match(homeTeam, awayTeam)
Creates a new Match instance.

**Throws**:

- <code>ValidationError</code> If the team names are invalid.


| Param | Type | Description |
| --- | --- | --- |
| homeTeam | <code>string</code> | The name of the home team. |
| awayTeam | <code>string</code> | The name of the away team. |

<a name="Match+id"></a>

### match.id ⇒ <code>string</code>
Gets the unique ID for the match.

**Kind**: instance property of [<code>Match</code>](#Match)  
**Returns**: <code>string</code> - The unique ID for the match.  
<a name="Match+totalScore"></a>

### match.totalScore ⇒ <code>number</code>
Gets the total score for the match.

**Kind**: instance property of [<code>Match</code>](#Match)  
**Returns**: <code>number</code> - The total score for the match.  
<a name="Match+setScore"></a>

### match.setScore(homeTeamScore, awayTeamScore)
Sets the score for the match.

**Kind**: instance method of [<code>Match</code>](#Match)  
**Throws**:

- <code>ValidationError</code> If the scores are not positive integers.


| Param | Type | Description |
| --- | --- | --- |
| homeTeamScore | <code>number</code> | The score of the home team. |
| awayTeamScore | <code>number</code> | The score of the away team. |

<a name="Match.getId"></a>

### Match.getId(homeTeam, awayTeam) ⇒ <code>string</code>
Generates a unique ID for the match based on the team names.

**Kind**: static method of [<code>Match</code>](#Match)  
**Returns**: <code>string</code> - The unique ID for the match.  
**Throws**:

- <code>ValidationError</code> If the team names are invalid.


| Param | Type | Description |
| --- | --- | --- |
| homeTeam | <code>string</code> | The name of the home team. |
| awayTeam | <code>string</code> | The name of the away team. |

<a name="Match.validateTeams"></a>

### Match.validateTeams(homeTeam, awayTeam)
Validates the team names.

**Kind**: static method of [<code>Match</code>](#Match)  
**Throws**:

- <code>ValidationError</code> If the team names are invalid.


| Param | Type | Description |
| --- | --- | --- |
| homeTeam | <code>string</code> | The name of the home team. |
| awayTeam | <code>string</code> | The name of the away team. |

<a name="ScoreBoard"></a>

## ScoreBoard
**Kind**: global class  

* [ScoreBoard](#ScoreBoard)
    * [new ScoreBoard()](#new_ScoreBoard_new)
    * [.startMatch(homeTeam, awayTeam)](#ScoreBoard+startMatch) ⇒ [<code>Match</code>](#Match)
    * [.getMatch(homeTeam, awayTeam)](#ScoreBoard+getMatch) ⇒ [<code>Match</code>](#Match) \| <code>null</code>
    * [.getMatches()](#ScoreBoard+getMatches) ⇒ [<code>Array.&lt;Match&gt;</code>](#Match)
    * [.finishMatch(homeTeam, awayTeam)](#ScoreBoard+finishMatch)

<a name="new_ScoreBoard_new"></a>

### new ScoreBoard()
Creates a new ScoreBoard instance.

<a name="ScoreBoard+startMatch"></a>

### scoreBoard.startMatch(homeTeam, awayTeam) ⇒ [<code>Match</code>](#Match)
Starts a new match between the specified home and away teams.

**Kind**: instance method of [<code>ScoreBoard</code>](#ScoreBoard)  
**Returns**: [<code>Match</code>](#Match) - The newly created Match instance.  
**Throws**:

- <code>MatchExistsError</code> If a match with the specified teams already exists.
- <code>ValidationError</code> If the team names are invalid.


| Param | Type | Description |
| --- | --- | --- |
| homeTeam | <code>string</code> | The name of the home team. |
| awayTeam | <code>string</code> | The name of the away team. |

<a name="ScoreBoard+getMatch"></a>

### scoreBoard.getMatch(homeTeam, awayTeam) ⇒ [<code>Match</code>](#Match) \| <code>null</code>
Retrieves an existing match between the specified home and away teams.

**Kind**: instance method of [<code>ScoreBoard</code>](#ScoreBoard)  
**Returns**: [<code>Match</code>](#Match) \| <code>null</code> - The Match instance if found, otherwise null.  
**Throws**:

- <code>ValidationError</code> If the team names are invalid.


| Param | Type | Description |
| --- | --- | --- |
| homeTeam | <code>string</code> | The name of the home team. |
| awayTeam | <code>string</code> | The name of the away team. |

<a name="ScoreBoard+getMatches"></a>

### scoreBoard.getMatches() ⇒ [<code>Array.&lt;Match&gt;</code>](#Match)
Retrieves all matches, sorted by total score in descending order and by creation date in descending order if scores are equal.

**Kind**: instance method of [<code>ScoreBoard</code>](#ScoreBoard)  
**Returns**: [<code>Array.&lt;Match&gt;</code>](#Match) - An array of Match instances.  
<a name="ScoreBoard+finishMatch"></a>

### scoreBoard.finishMatch(homeTeam, awayTeam)
Finishes and removes the match between the specified home and away teams.

**Kind**: instance method of [<code>ScoreBoard</code>](#ScoreBoard)  
**Throws**:

- <code>ValidationError</code> If the team names are invalid.
- <code>MatchNotFoundError</code> If the match is not found.


| Param | Type | Description |
| --- | --- | --- |
| homeTeam | <code>string</code> | The name of the home team. |
| awayTeam | <code>string</code> | The name of the away team. |

