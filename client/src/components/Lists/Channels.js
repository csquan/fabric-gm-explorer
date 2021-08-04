/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import matchSorter from 'match-sorter';
import ReactTable from '../Styled/Table';
import { channelsType } from '../types';

class Channels extends Component {
  reactTableSetup = () => [
    {
      Header: 'ID',
      accessor: 'id',
      filterMethod: (filter, rows) => matchSorter(
        rows,
        filter.value,
        { keys: ['id'] },
        { threshold: matchSorter.rankings.SIMPLEMATCH },
      ),
      filterAll: true,
      width: 100,
    },
    {
      Header: 'Channel Name',
      accessor: 'channelname',
      filterMethod: (filter, rows) => matchSorter(
        rows,
        filter.value,
        { keys: ['channelname'] },
        { threshold: matchSorter.rankings.SIMPLEMATCH },
      ),
      filterAll: true,
    },
    {
      Header: 'Blocks',
      accessor: 'blocks',
      filterMethod: (filter, rows) => matchSorter(
        rows,
        filter.value,
        { keys: ['blocks'] },
        { threshold: matchSorter.rankings.SIMPLEMATCH },
      ),
      filterAll: true,
      width: 125,
    },
    {
      Header: 'Transactions',
      accessor: 'transactions',
      filterMethod: (filter, rows) => matchSorter(
        rows,
        filter.value,
        { keys: ['transactions'] },
        { threshold: matchSorter.rankings.SIMPLEMATCH },
      ),
      filterAll: true,
      width: 125,
    },
    {
      Header: 'Timestamp',
      accessor: 'createdat',
      filterMethod: (filter, rows) => matchSorter(
        rows,
        filter.value,
        { keys: ['createdat'] },
        { threshold: matchSorter.rankings.SIMPLEMATCH },
      ),
      filterAll: true,
    },
  ];

  render() {
    const { channels } = this.props;
	  console.log("before ")
	  console.log(this.props)
    /*const obj = {
								"id": 4,
								"channelname": "test",
								"blocks": 5,
								"transactions": 5,
								"channel_genesis_hash": "573f3ff5686831e322cb1c02769ebd5519ec7b3618cabcc1dca1705a6a7e1808",
								"createdat": "2018-05-29T01:09:21.000Z",
								"channel_hash": "7c003fa4bd600688a14465eeb176150fa3bc1ef2f6fcbd0d88140ed9fbb231c5"
    }
	  channels.push(obj)
	  console.log(channels)*/
    return (
      <div>
        <ReactTable
          data={channels}
          columns={this.reactTableSetup()}
          defaultPageSize={5}
          filterable
          minRows={0}
          showPagination={!(channels.length < 5)}
        />
      </div>
    );
  }
}

Channels.propTypes = {
  channels: channelsType.isRequired,
};

export default Channels;
