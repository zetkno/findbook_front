import React, { PureComponent } from 'react';
import styles from './Index.less';
import { FormattedMessage } from 'umi/locale';
import { connect } from 'dva';
import { Row, Col, Card, Tooltip } from 'antd';
import { Pie, WaterWave, Gauage, TagCloud } from '@/components/Charts';



@connect(({ loading }) => ({
  loading: loading,
}))
class Index extends PureComponent {
  render() {
    return (
      <Row gutter={24} style={{ height: '600px'}}>
          <Col xl={24} lg={24} sm={24} xs={24}>
            <Card style={{height: '700px'}}
              title={
                <FormattedMessage
                  id="app.index.findbook-title"
                  defaultMessage="Proportion Per Category"
                />
              }
              bordered={false}
              className={styles.pieCard}
            >
              <Row style={{ padding: '16px 0' }}>
                <Col span={8}>
                  <Pie
                    animate={false}
                    //percent={}
                    subTitle={
                      <FormattedMessage id="app.monitor.fast-food" defaultMessage="Fast food" />
                    }
                    total="99"
                    height={128}
                    lineWidth={2}
                  />
                </Col>
                <Col span={8}>
                  <Pie
                    animate={false}
                    color="#5DDECF"
                    percent={22}
                    subTitle={
                      <FormattedMessage
                        id="app.monitor.western-food"
                        defaultMessage="Western food"
                      />
                    }
                    total="22%"
                    height={128}
                    lineWidth={2}
                  />
                </Col>
                <Col span={8}>
                  <Pie
                    animate={false}
                    color="#2FC25B"
                    percent={32}
                    subTitle={
                      <FormattedMessage id="app.monitor.hot-pot" defaultMessage="Hot pot" />
                    }
                    total="32%"
                    height={128}
                    lineWidth={2}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          {/* <Col xl={6} lg={12} sm={24} xs={24}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.popular-searches"
                  defaultMessage="Popular Searches"
                />
              }
             
              bordered={false}
              bodyStyle={{ overflow: 'hidden' }}
            >
              <TagCloud data={1} height={161} />
            </Card>
          </Col> */}
          {/* <Col xl={6} lg={12} sm={24} xs={24}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.resource-surplus"
                  defaultMessage="Resource Surplus"
                />
              }
              bodyStyle={{ textAlign: 'center', fontSize: 0 }}
              bordered={false}
            >
              <WaterWave
                height={161}
                title={
                  <FormattedMessage id="app.monitor.fund-surplus" defaultMessage="Fund Surplus" />
                }
                percent={34}
              />
            </Card>
          </Col> */}
        </Row>
  
    );
  }
}

export default Index;